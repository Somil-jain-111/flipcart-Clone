import styled from '@emotion/styled';
import { Box, Menu, MenuItem, Typography } from '@mui/material'
import React, {useState} from 'react'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


const Component = styled(Menu)`
margin-top:5px;
`
const Logoutt = styled(Typography)`
margin-left:20px;
font-size:14px;
corsur:pointer;
`

export default function Profile({account,setAccount1}) {
    const [open, SetOpen] = useState(false);
    const handleClick = (event)=>{
SetOpen(event.currentTarget)

    }

    const handleClose = ()=>{
        SetOpen(false)
          
    }
    const Logout= ()=>{
        setAccount1("")
    }
  return (
    <>
<Box>
<Typography  onClick={handleClick} style={{marginTop:2}} >{account}</Typography>
<Component
      
        aria-labelledby="demo-positioned-button"
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
    
      >
        <MenuItem onClick={()=>{handleClose(); Logout();}}>
            <PowerSettingsNewIcon color="primary" fontSize='small'/>
            <Logoutt>Logout</Logoutt>
        </MenuItem>
        
      </Component>
</Box>
    
    
    </>
  )
}
