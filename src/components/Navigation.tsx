import { AppBar, Toolbar, Typography } from "@mui/material"
import React from 'react'

const Navigation = () => {
   return (
      <AppBar position="static">
         <Toolbar>
            <Typography mr={2}>All products</Typography>
            <Typography mr={2}>Women</Typography>
            <Typography>Men</Typography>
         </Toolbar>
      </AppBar>
   )
}

export default Navigation