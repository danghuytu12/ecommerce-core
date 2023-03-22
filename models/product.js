const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    richDescription: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    },
    image: [{
        type: String,
    }],
    brand: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        default: 0
    },
    countInStock: {
        type: Number,
        default: 0,
        min: 0,
        max: 255
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        require: true,
    },
    rating: {
        type: Number,
        default: 0,
    },
    numberReviews:{
        type: Number,
        default: 0,
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    dateCreateAt: {
        type: Date,
        default: Date.now,
    }
})

exports.Product = mongoose.model('Product', productSchema)