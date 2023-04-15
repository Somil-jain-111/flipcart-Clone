
import React, { useState } from 'react'
import {AppBar , Box, Drawer, IconButton, List,ListItem, Toolbar, Typography,styled} from '@mui/material'
import Search from '../search/Search'
import CustomButton from '../../constumeBtn/CustomButton'
import { Link } from 'react-router-dom'
import { Menu } from '@mui/icons-material';

const StyledHeader = styled(AppBar)`
background: #2874f0;
height:55px
`
const Component = styled(Link)`
margin-left:12%;
line-height:0px;
text-decoration:none

`
const Subheading = styled(Typography)`
font-size: 10px;
font-style: italic;
`
const PlusImage= styled('img')({
    width:10,
    height:10,
    marginLeft:4
})
const Custombtn = styled(Box)(({theme})=>({
margin : "0 5% 0 auto",
[theme.breakpoints.down("md")]:{
     display:"none"
}
}))
const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'block',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));





export default function Header() {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }
    const list = ()=>{
        <Box style={{width:200}} onClick={handleClose}>
            <List>
                <ListItem button>
                    <Custombtn>
                    <CustomButton/>
                    </Custombtn>
     
                </ListItem>
            </List>
        </Box>
    
    }

  return (
   
    <StyledHeader>
        
        <Toolbar style={{minHeight:"55px"}}>
            <MenuButton  color="inherit"
                    onClick={handleOpen} >
                <Menu/>
            </MenuButton>
            <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>

            <Component to='/'>
    <img src={logoURL} alt="" style={{width:75}} />
    <Box style={{display:"flex"}}>
        <Subheading>Expore &nbsp; 
         <Box  component='span'  style={{color:"yellow"}}>  
             Plus
         </Box>
          </Subheading>
          <PlusImage src={subURL} alt="" />
    </Box>
            </Component>
<Search/>   
<Custombtn>
    <CustomButton/>
</Custombtn>
        </Toolbar>
    </StyledHeader>
  )
}
