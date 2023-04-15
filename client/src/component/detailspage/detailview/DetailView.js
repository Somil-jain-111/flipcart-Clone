import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, } from 'react-router-dom'
import { getProductDetails } from '../../../redux/actions/productActions'
import { Typography,Box, Grid } from '@mui/material'
import ActionItem from '../actionItem/ActionItem'
import styled from '@emotion/styled'
import ProductDetail from '../productDetail/ProductDetail'


const Component = styled(Box)`
background:#f2f2f2;
margin-top:55px;
`
const Container = styled(Grid)(({theme})=>({
backgound: "#ffffff",
display:"flex",
[theme.breakpoints.down('md')]:{
    margin:0
}
}))
const RightContainer = styled(Grid)`
margin-top:55px;
`

export default function DetailView() {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const disptach = useDispatch()
    const {loading,product} = useSelector(state => state.getProductDetails);
    // console.log(product)
    const {id} = useParams()
    useEffect(()=>{
        // if(product && id !== product.id)
        disptach(getProductDetails(id))
    },[disptach,id])
    

  return (
    <Component>
        {
     product && Object.keys(product).length && 
    <Container container>
<Grid item lg={4} md={4} sm={8} xs={12}>
<ActionItem product={product}/>
</Grid>  
        <RightContainer  item lg={8} md={8} sm={8} xs={12}>
{/* <Typography>{product.title.longTitle}</Typography>
<Typography style={{marginTop: 5, color: '#878787', fontSize: 14 }}>9 rating & 1 Review
<span><img src={fassured} style={{width: 77, marginLeft: 20}} /></span>
 </Typography>
 <Typography>
                            <span style={{ fontSize: 28 }}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                            <span style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388E3C' }}>{product.price.discount} off</span>
                        </Typography> */}
                        <ProductDetail  product={product} />
        </RightContainer>
        </Container>
        }
    </Component>
  )
}
