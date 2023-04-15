import { Box, Typography } from '@mui/material'
import React from 'react'
import { navData } from '../../../constants/data'
import styled from '@emotion/styled'

const Component = styled(Box)(({theme})=>({
display:"flex",
margin: "55px 130px 0 130px",
justifyContent: "space-evenly",
overflow:"hidden",

// [theme.breakpoint.down("lg")]:{
    //     margin:0
    // }

}))

const Container = styled(Box)`
padding: 12px 8px;
text-align:center;

`

const Text = styled(Typography)`
font-size:14px;
font-weight:600;
font-family: inherit;
`

export default function Navbar() {
  return (
    <Box style={{background:"#fff"}}>

   
   <Component>
    {
        navData.map(data =>(
            <Container>
                <img src={data.url} alt="nav" />
                    <Text>{data.text}</Text>
                </Container>
        ))
    }

   </Component>
   </Box>
  )
}
