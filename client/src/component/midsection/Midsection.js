import React from 'react'

import { imageURL } from '../../constants/data'
import { Grid } from '@mui/material'
import styled from '@emotion/styled'

const Wrapper = styled(Grid)`
margin-top:10px;
justify-content:space-between;

`

const Image = styled(`img`)(({theme})=>({
marginTop:10,
width:"100%",
display:"flex",
justifyContent:"space-between",
// [theme.breakpoints.up('md')]: {
//   objectFit:"cover",
// height:130,
//   },
}))
export default function Midsection() {
  return (
    <>
    <Wrapper lg={12}  sm={12} md={12} xs={12} container>
        {
            imageURL.map(image =>(
                <Grid item lg={4}  sm={4} md={4} xs={12}>
                <img src={image} alt=""  style={{width:"100%"}} />
                </Grid>
            ))
        }

    </Wrapper>
    <Image src="https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50" alt="" />
    </>
  )
}
