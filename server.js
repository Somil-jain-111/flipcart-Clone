const express = require('express')
const cors = require('cors')
const db = require('./db/db')
const dotenv = require('dotenv')
const Bodyparser = require('body-parser')
const DefaultData = require('./default/default')
const userRoute = require('./routes/user-Route')
const {v4} = require('uuid')


dotenv.config();

 const app = express()
 app.use(express.json())
 app.use(Bodyparser.json({extended:true}))
 app.use(Bodyparser.urlencoded({extended:true}))
 app.use(cors())

 const PORT = process.env.PORT || 8000
 const USERNAME= process.env.BD_USERNAME;
 const PASSWORD= process.env.BD_PASSWORD;
 const URL = process.env.MONGODB_URL || `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.oaizyy7.mongodb.net/ECOMMERCE?retryWrites=true&w=majority`

app.use('/',userRoute)
 db(URL)

 if(process.env.NODE_ENV === "production"){
   app.use(express.static('client/build'))
 }

 app.listen(PORT,()=>{
   //  console.log('working')
 })

 DefaultData()


module.exports = paytmMerchantKey='bKMfNxPPf_QdZppa'
 let paytmParams = {}
  paytmParams["MID"] = 'DIY12386817555501617'
  paytmParams['WEBSITE'] = "DIYtestingweb"
  paytmParams['CHANNEL_ID']= "WEB"
  paytmParams['INDUSTRY_ID'] ="Retail"

 
  paytmParams["ORDER_ID"] = v4()

  paytmParams['CUS_ID'] = "yQBogp23938109421093"
  paytmParams['TXN_AMOUNT'] = "100"
  paytmParams['CALLBACK_URL'] = "callback"
  paytmParams['EMAIL'] = "somilj111@gmail.com"
  paytmParams['MOBILE_NO'] = "1234567891"

 module.exports={
  
   paytmParams
}