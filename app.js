const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')

// middleware

app.use(bodyParser.json())
app.use(morgan('tiny'))


const productSchema = mongoose.Schema({
    name: String,
    image: String,
    countInStock: Number
})

const Product = mongoose.model('Product', productSchema)

require('dotenv/config')
const api = process.env.API_URL


app.get(`${api}/products`, (req, res) => {

    const products = {
        id: 1,
        name: 'aaa',
        image: ' adasdasd'
    }
    res.send(products)
})

app.post(`${api}/products`, (req, res) => {

    const product = new Product({
        name: req.body.name,
        image: req.body.image,
        countInStock: req.body.countInStock
    })
    product.save().then((create => {
        res.status(200).json(create)
    })).catch((err) => {
        res.status(500).json({
            error: err,
            success: false
        })
    })
    res.send(product)
})

mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'eshop-ecommerce'
}).then(() => {
    console.log('done')
})
    .catch((err) => {
        console.log(err)
    })

app.listen(3000, () => {
    console.log(api)
})