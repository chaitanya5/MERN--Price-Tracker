const router = require('express').Router()
let Product = require('../models/product.model')

//Handle a get request which means to READ from DB
router.route('/').get((req,res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(error => res.status(400).json('Error:-'+error))
})

//Post request which means to CREATE
router.route('/add').post((req,res) => {
    //Remember to put semi colon after req.body.seller
    const name = req.body.name;
    const seller = req.body.seller;
    const price = Number(req.body.price);
    const dom = new Date(req.body.dom)    
  
    const newDescription = new Product({name,seller,price,dom})
   
    newDescription.save()
        .then(() => res.json('Product Added'))
        .catch(error => res.status(400).json('Error:-'+error))    
})

//Getting element by ID
router.route('/:id').get((req,res) => {
    Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(error => res.status(400).json('Error:-'+ error))
})

//Getting by ID and DELETE
router.route('/:id').delete((req,res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(()=> res.json('Element Deleted'))
        .catch(error => res.status(400).json('Error:-'+error))
})

//Getting by ID and UPDATE
router.route('/update/:id').post((req,res)=> {
    Product.findById(req.params.id)
        .then(product => {
            product.name = req.body.name;
            product.seller = req.body.seller;
            product.price = Number(req.body.price);
            product.dom = new Date(req.body.dom);
    
            product.save()
            .then(() => res.json('Updated Succesfully'))
            .catch(error => res.status(400).json('Error:-'+error))
        })
        .catch(error => res.status(400).json('Error:-'+ error))
})

module.exports = router
