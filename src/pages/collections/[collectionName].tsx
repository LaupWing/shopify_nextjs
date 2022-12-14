import React from 'react'
import {Container, Box} from "@mui/material"
import Navigation from "../../components/Navigation"
import BreadcrumbsNavigation from "../../components/BreadcrumbsNavigation"
import { useRouter } from "next/router"

const CollectionPage = () => {
   const router = useRouter()
   
   const {collectionName} = router.query

   return (
      <Box>
         <Navigation />
         <Container maxWidth="lg">
            <BreadcrumbsNavigation title={collectionName as string}/>
         </Container>
      </Box>
   )
}

export default CollectionPage