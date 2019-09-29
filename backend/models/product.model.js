const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema(
    {   
        name:{type:String,unique:true,trim:true,required:true},
        seller:{type:String,trim:true,required:true},
        price:{type:Number,required:true},
        dom:{type:Date,required:true}
    },
    { timestamps:true}
)

const Product = mongoose.model('Product',productSchema)

module.exports = Product;