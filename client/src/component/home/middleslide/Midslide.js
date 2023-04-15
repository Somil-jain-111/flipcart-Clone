import { Box } from '@mui/material'
import React from 'react'
import Slide from '../slide/Slide'
import styled from '@emotion/styled'

  
 const Component = styled(Box)`
 display:flex;
 `
 const LeftComponent = styled(Box)(({theme})=>({
 width:"83%",
 // [theme.breakpoint.down("md")]:{
    //    width:"100%",
    // }
 }))
 const RightComponent = styled(Box)(({theme})=>({
    background:"#FFFFFF",
    padding:5,
    marginTop:10, 
    marginLeft:10,  
    width:"17%",
    textAlign:"center",
    // [theme.breakpoint.down("md")]:{
    //     display:"none"
    // }
 }))
   

export default function Midslide({products,title,timer}) {
  return (
    <Component>
        <LeftComponent>
        <Slide products={products}  title={title} timer={timer}/>

        </LeftComponent>
        <RightComponent>
<img src="https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70" style={{width:217}} alt="" />
        </RightComponent>
    </Component>

  )
}
