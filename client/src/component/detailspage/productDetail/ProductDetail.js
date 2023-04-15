import styled from "@emotion/styled";
import { Typography,Box, Table, TableBody, TableRow, TableCell } from "@mui/material";
import React from "react";
import { LocalOffer as Badge } from '@mui/icons-material';

const SmallText = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    margin-left:20px;
    & > p {
        font-size: 14px;
        margin-top: 10px;
    }
`

const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td {
        font-size: 14px;
        margin-top: 10px;
    }
`

const StyledBadge = styled(Badge)`
    margin-right: 10px;
    color: #00CC00;
    font-size: 15px;
`;


export default function ProductDetail({ product }) {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime()+(5*24*60*60*1000));
  return (
    < >
    <Box style={{marginTop:30, marginLeft:30}}>

    
      <Typography >{product.title.longTitle}</Typography>
      <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>
        9 rating & 1 Review
        <span>
          <img src={fassured} style={{ width: 77, marginLeft: 20 }} />
        </span>
      </Typography>
      <Typography>
        <span style={{ fontSize: 28 }}>₹{product.price.cost}</span>
        &nbsp;&nbsp;&nbsp;
        <span style={{ color: "#878787" }}>
          <strike>₹{product.price.mrp}</strike>
        </span>
        &nbsp;&nbsp;&nbsp;
        <span style={{ color: "#388E3C" }}>{product.price.discount} off</span>
      </Typography>
      <Typography> Avialable Offer</Typography>
      </Box>
      <SmallText>
    <Typography> <StyledBadge/>Get extra 20% off upto Rs50 on 1 item(s) t&C</Typography>
    <Typography><StyledBadge/> Get Extra 13% Off  (price inclusive of discount)</Typography>
    <Typography><StyledBadge/>Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹500*Know More</Typography>
    <Typography><StyledBadge/>Buy 2 items 5% Buy 3 or more save 10%</Typography>
    <Typography><StyledBadge/>5% Cashback on Flipkart Axis Bank CardT&C</Typography>
    <Typography><StyledBadge/>No Coast EMI</Typography>
      </SmallText>
      <Table>
        <TableBody>
            <ColumnText>
                         <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
            </ColumnText>
            <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell>
                            <span style={{ color: '#2874f0' }}>SuperComNet</span>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more sellers starting from ₹329</Typography>
                        </TableCell>
                    </ColumnText>
                    <TableRow>
                        <TableCell colSpan={2}>
                            <img src={adURL} style={{ width: 390 }} />
                        </TableCell>
                    </TableRow>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>
        </TableBody>
      </Table>
    </>
  );
}
