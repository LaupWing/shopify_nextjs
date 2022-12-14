import React from 'react'
import { Box, Breadcrumbs, Link, Typography } from "@mui/material"

interface Props {
   title: string
}

const BreadcrumbsNavigation:React.FC<Props> = ({title}) => {
   return (
      <Box mt={2}>
         <Breadcrumbs separator=">" aria-label="breadcrumb">
            <Link 
               underline="hover"
               key="1"
               color="inherit"
               href="/"
            >
               Products
            </Link>
            <Typography>
               {title && title.replace(/^\w/, c => c.toUpperCase())}
            </Typography>
         </Breadcrumbs>
      </Box>
   )
}

export default BreadcrumbsNavigation