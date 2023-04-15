import styled from '@emotion/styled'
import { ButtonGroup, Button } from '@mui/material'
import React from 'react'

const Component = styled(ButtonGroup)`
margin-top:30px
`
const StyledButton = styled(Button)`
border-radius:50%;

`

export default function ButtonGroup1() {
  return (
   <Component>
   
   <StyledButton>-</StyledButton>
   <Button disabled>1</Button>
   <StyledButton>+</StyledButton>
   </Component>
  )
}
