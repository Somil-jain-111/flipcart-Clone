import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {getProductsReducer,getProductDetailsReducer} from '../reducers/productReducers'
import {cartReducer} from '../reducers/cartReducer'



const reducer = combineReducers ({
    getProducts :  getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    cart: cartReducer
})

const middleware = [thunk]

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;
