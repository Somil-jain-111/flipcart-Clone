import styled from '@emotion/styled'
import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../../../redux/actions/cartActions';
import { payUsingPaytm } from '../../../service/api';
import { post } from '../../../utils/paytm';

const LeftContainer = styled(Box)(({theme})=>({
minWdth:"40%",
padding : "40px 0 0 80px",
[theme.breakpoints.down('md')]:{
    padding : "20px 40px",
}
}))
const Image = styled('img')({
padding:"15px"
})

const StyledButton = styled(Button)(({theme})=>({
    width: "48%",
    borderRadius: "2px",
    height: "50px",
    color:" #FFF",
    cursor:"pointer",
    [theme.breakpoints.down('md')]:{
        width: "46%",
     },
     [theme.breakpoints.down('sm')]:{
        width: "48%",
     }
}))
export default function ActionItem({product}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity , SetQuantity] = useState(1)

const {id}= product;

  const addItemToCart =()=>{
    dispatch(addtoCart(id,quantity))
navigate('/cart')
  }

  const buyNow = async()=>{
   const response = await payUsingPaytm({amount:500, email:"somilj111@gmail.com"})
   const information = {
    action: 'https://securegw-stage.paytm.in/order/process',
    params: response
   }
   post(information)
  }

  return (
    <LeftContainer>
        <Box style={{padding:"15px 20px",border: "1px solid #f0f0f0", width:"90%",}}>  
        <Image src={product.detailUrl} alt="" />
        </Box>
        
        <StyledButton variant='contained' onClick={()=>addItemToCart()} style={{marginRight: 10, background: '#ff9f00'}}> <Cart/>add to Cart</StyledButton>
        <StyledButton variant='contained' onClick={()=>buyNow()} style={{background: '#fb641b'}}> <Flash/> Buy Now</StyledButton>

        </LeftContainer>
  )
}
