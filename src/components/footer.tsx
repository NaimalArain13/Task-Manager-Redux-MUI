import { AppBar ,Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <AppBar sx={{position:"static", boxShadow:3}}>
        <Typography variant='h6' align='center' color='text.secondary'>
            Build with ❤ by Naimal Salahuddin
        </Typography>
    </AppBar>
  )
}

export default Footer