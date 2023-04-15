const router = require('express').Router()
const userController = require('../controller/user-controller')
const productController = require('../controller/product-controller')
const paymentController = require('../controller/payment-controller')

router.post('/signup', userController.Signup)
router.post('/login', userController.Login)

router.get('/products', productController.getProducts)
router.get('/product/:id', productController.getProductById)
router.post('/payment',paymentController.addPaymentGateway)


module.exports = router