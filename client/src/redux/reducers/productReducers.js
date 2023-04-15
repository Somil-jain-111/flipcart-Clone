import * as actionType from '../constants/productConstants'
export const getProductsReducer =(state = {products :[]}, actions ) =>{

    switch (actions.type){
 case actionType.GET_PRODUCTS_SUCCESS:
    return {products: actions.payload}
    case actionType.GET_PRODUCTS_FAIL:
        return {error: actions.payload}
    default :
        return state
    
        }

}

export const getProductDetailsReducer =(state = {products :[]}, actions ) =>{

    switch (actions.type){
 case actionType.GET_PRODUCT_DETAILS_REQUEST:
    return {loading: true}
    case actionType.GET_PRODUCT_DETAILS_SUCCESS:
        return {loading: false,product: actions.payload}
     case actionType.GET_PRODUCT_DETAILS_FAIL:
            return {loading: false,error: actions.payload}
            case actionType.GET_PRODUCT_DETAILS_RESET:
                return {product: {}}
    default :
        return state
    
        }

}