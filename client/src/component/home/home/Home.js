import React ,{Fragment, useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../navbar/Navbar'
import Banner from '../banner/Banner'
import { Box } from '@mui/material'
import styled from '@emotion/styled'
import { getProducts } from '../../../redux/actions/productActions'

import Midslide from '../middleslide/Midslide'
import Midsection from '../../midsection/Midsection'

const Container = styled(Box)`
padding:10px;
background: #F2F2F2;
`

export default function Home() {
  const getproducts = useSelector(state => state.getProducts)
  const {products} = getproducts
  // console.log(products)
const dispatch = useDispatch()
  useEffect(()=>{
   dispatch(getProducts()) 
  },[dispatch])

  return (
    <Fragment>
        <Navbar/>
        <Container>
        <Banner/>
        <Midslide products={products}  title='Discounts for You' timer={true}/>
        <Midsection/>
        <Midslide products={products}  title='Suggested Items'  timer={false}/>
        <Midslide products={products} title='Top Selection' timer={false}/>
        <Midslide products={products}  title='Recommended Items' timer={false}/>
        <Midslide products={products} title="Treding offers" timer={false}/>
        <Midslide products={products}title="Season's Top picks" timer={false}/>
        </Container>
        
    </Fragment>
  )
}
