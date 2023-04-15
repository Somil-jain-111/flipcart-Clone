import axios from "axios"

import * as actionType from '../constants/cartConstants'

const URL = ''

export const addtoCart =(id, quantity)=> async(dispatch)=>{
try {
 const {data} =   await axios.get(`${URL}/product/${id}`);

dispatch({type: actionType.ADD_TO_CART,payload:{...data, quantity }})


} catch (error) {
    dispatch({type: actionType. ADD_TO_CART_ERROR,payload:error.message})

}
}


export const removefromCart = (id) => (dispatch) =>{
    dispatch({type: actionType.REMOVE_FROM_CART, payload:id})
    
}