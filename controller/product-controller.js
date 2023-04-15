const Product = require('../module/product-schema')

const getProducts = async (req,res ) =>{
    try {
        const products  = await Product.find({})
        return res.status(200).json(products)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
const getProductById = async (req,res ) =>{
    try {
        const id  = req.params.id
    const product =    await Product.findOne({'id':id})
return res.status(200).json(product)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = {
    getProducts,
    getProductById
}