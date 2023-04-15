import { Box, InputBase,List,ListItem,styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { useSelector,useDispatch } from 'react-redux'
import { getProducts } from '../../redux/actions/productActions'
import { Link } from 'react-router-dom'

const SearchContainer= styled(Box)`
background: #fff;
width:38%;
margin-left:10px;
border-radius:2px;
display:flex
`
const InputSearchBase = styled(InputBase)`
padding-left:10px;
width:100%;
font-size: unset;

`
const SearchIconwrapper = styled(Box)`
color: blue;
padding:5px;
display:flex;
`

const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;
`;
export default function Search() {
  const [ text, setText ] = useState();
  const [ open, setOpen ] = useState(true)
  const dispatch = useDispatch()
  const {products} = useSelector(state=> state.getProducts)

  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])

  const getText = (text) => {
      setText(text);
      setOpen(false)
  }
  return (
    <SearchContainer>
 <InputSearchBase placeholder='Search for products, brands and more'
 onChange={(e)=>getText(e.target.value)}
 />
 <SearchIconwrapper>
    <SearchIcon/>
 </SearchIconwrapper>
 {
  text &&
  <ListWrapper>
    {
products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
  <ListItem>
    <Link style={{textDecoration:"none", color:"inherit"}} to={`/product/${product.id}`} onClick={()=>setText(false)}>
    {product.title.longTitle}
    </Link>
    
  </ListItem>
))
    }
  </ListWrapper>
 }
    </SearchContainer>
   
  )
}
