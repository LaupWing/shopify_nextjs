import { AppBar, Toolbar, Typography, Link } from "@mui/material"
import React from 'react'

const Navigation = () => {
   return (
      <AppBar position="static">
         <Toolbar>
            <Link 
               href="/"
               underline="none"
               color={"inherit"}
            >
               <Typography mr={2}>All products</Typography>
            </Link>
            <Link 
               href="/collections/women"
               underline="none"
               color={"inherit"}
            >
               <Typography mr={2}>Women</Typography>
            </Link>
            <Link 
               href="/collections/men"
               underline="none"
               color={"inherit"}
            >
               <Typography>Men</Typography>
            </Link>
         </Toolbar>
      </AppBar>
   )
}

export default Navigation