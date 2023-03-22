const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')

const productsRouter = require('./routes/products')
const categoryRouter = require('./routes/category')
const userRouter = require('./routes/user')
const orderRouter = require('./routes/order')
const api = '/api/v1'
// middleware

app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use(cors())
app.options('*', cors())

app.use(`/api/v1/products`, productsRouter)
app.use(`/api/v1/categories`, categoryRouter)
app.use(`/api/v1/users`, userRouter)
app.use(`/api/v1/orders`, orderRouter)


require('dotenv/config')

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