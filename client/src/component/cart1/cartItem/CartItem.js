import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { addEllipsis } from "../../../utils/common-utils";
import ButtonGroup from "../buttonGroup/ButtonGroup";
import { useDispatch } from "react-redux";
import { removefromCart } from "../../../redux/actions/cartActions";

const Component = styled(Box)`
  border-top: 1px solid #f0f0f0;
  display: flex;
  background: #fff;
`;
const LeftComponent = styled(Box)`
  margin: 26px;
  display: flex;
  flex-direction: column;
`;
const SellerText = styled(Typography)`
  display: flex;
  color: #878787;
  font-size: 14px;
  margin-top: 13px;
`;
const Remove = styled(Button)`
  margin-top: 20px;
  font-size: 16px;
  color: #000;
  font-weight: 600;
`;

export default function CartItem({ item }) {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
    const disptach = useDispatch()

    const removeItemFromCart=(id) =>{
      disptach(removefromCart(id))
    }
  return (
    <Component>
      <LeftComponent>
        <img src={item.url} style={{ width: 110, height: 110 }} alt="" />
        <ButtonGroup />
      </LeftComponent>
      <Box style={{ margin: 20 }}>
        <Typography>{addEllipsis(item.title.longTitle)}</Typography>

        <SellerText>
          Seller:RailNet
          <Box>
            <img src={fassured} style={{ width: 77, marginLeft: 20 }} alt="" />
          </Box>
        </SellerText>
        <Typography style={{ marginTop: "20px 0" }}>
          <span style={{ fontWeight: 600, fontSize: 18 }}>
            ₹{item.price.cost}
          </span>
          &nbsp;&nbsp;&nbsp;
          <span style={{ color: "#878787" }}>
            <strike>₹{item.price.mrp}</strike>
          </span>
          &nbsp;&nbsp;&nbsp;
          <span style={{ color: "#388E3C" }}>{item.price.discount} off</span>
        </Typography>
        <Remove onClick={()=> removeItemFromCart(item.id)}>Remove</Remove>
      </Box>
    </Component>
  );
}
