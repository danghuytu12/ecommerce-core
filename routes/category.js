const express = require('express')
const router = express.Router()
const {Category} = require('../models/category')

router.get('/', async (req, res) => {
    const categoryList = await Category.find()

    if(!categoryList) {
        res.status(500).json({success:false})
    }
    res.send(categoryList)
})

router.post('/', async (req, res) => {

    let category = new Category({
        name: req.body.name,
        icon: req.body.icon,
        color: req.body.color
    })
    category = await category.save()
    
    res.send(category)
})

module.exports = router;