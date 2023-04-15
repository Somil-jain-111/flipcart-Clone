const paytmchecksum = require('../paytm/PaytmChecksum')
const index = require('../server')

const addPaymentGateway = async(req,res)=>{
    try {
   const paytmCheckSum = await paytmchecksum.generateSignature(index.paytmParams, index.paytmMerchantKey);
   const params ={
    ...index.paytmParams, "CHECKSUM": paytmCheckSum
   }
   
   return res.status(200).json(params)

    } catch (error) {
        return res.status(400).json(error.message)
    }
}

module.exports = {
    addPaymentGateway
}