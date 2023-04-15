import { Badge, Box, Button, Typography,styled } from '@mui/material'
import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import {LoginContext} from '../context/DataProvider'
import LoginDailog from '../page/login/LoginDailog'
import {ShoppingCart} from '@mui/icons-material'
import Profile from '../component/profile/Profile'
import { useSelector } from 'react-redux'
// import CartItem from '../component/cart1/cartItem/CartItem'



const Wrapper = styled(Box)(({theme})=>({
display:"flex",
margin:"0 3% 0 auto",
"& > *":{
  marginRight:"40px !important",
  fontSize:16,
  alignItems:"center",
},
// [theme.breakpoints.down('md')]:{
//   display:"block"
//  }
}))
const Container = styled(Link)(({theme})=>({
display:"flex",
textDecoration:"none",
color:"#fff",
cursor:"pointer",
//  [theme.breakpoints.down('md')]:{
//   display:"block"
//  }
}))
const LoginButton = styled(Button)`
color: #2874f0;
background: #FFFFFF;
text-transform: none;
padding: 5px 40px;
border-radius: 2px;
box-shadow: none;
font-weight:600;
`

export default function CustomButton() {
  const [open , SetOpen] = useState(false)
  const {account,setAccount1} = useContext(LoginContext)
  const {CartItem} = useSelector(state => state.cart)
  const OpenDialog = ()=>{
    SetOpen(true)
  }
  return (
    <Wrapper>
      {
        account? <Profile account={account} setAccount1={setAccount1}/>:
        <LoginButton variant='contained' onClick={()=>OpenDialog()}>Login</LoginButton>
      }
   
    <Typography style={{marginTop:'3px',width:"135px"}}>Become a seller</Typography>

    <Typography style={{marginTop:'3px'}}>More</Typography>
    <Container to="/cart">
      <Badge badgeContent={CartItem?.length} color='secondary'>
      <ShoppingCart/>
      </Badge>
      
      
      
      <Typography>
        Cart
      </Typography>
      
      
    </Container>
    <LoginDailog open={open} SetOpen={SetOpen}/>
    </Wrapper>
  )
}
