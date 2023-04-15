const mongoose  = require('mongoose')

module.exports = async (URL) =>{
    try {
        await mongoose.connect(URL,{
            useNewUrlParser: true, useUnifiedTopology: true
        })
        console.log("mongodb")
    } catch (error) {
        console.log(error)
    }

}