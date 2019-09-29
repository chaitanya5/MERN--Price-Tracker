const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 4000
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true})
mongoose.connection.once('open',()=>console.log(`MongoDB connected`))

//Bring in the routes here 
const productRouter = require('./routes/product.route')
app.use('/products',productRouter)


app.listen(PORT,()=>console.log(`Server running at ${PORT}`))

