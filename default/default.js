const dealData = require('../constant/data')
const Product = require('../module/product-schema')

const DefaultData =async () =>{
    try {
        await Product.deleteMany({})
      await  Product.insertMany(dealData) 
       console.log("data importet")
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = DefaultData