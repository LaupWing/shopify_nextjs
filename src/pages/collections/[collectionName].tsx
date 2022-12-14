import React from 'react'
import {Container, Box} from "@mui/material"
import Navigation from "../../components/Navigation"
import BreadcrumbsNavigation from "../../components/BreadcrumbsNavigation"
import { useRouter } from "next/router"
import PRODUCTS from "../../data"
import ProductList from "../../components/ProductList"

const CollectionPage = () => {
   const router = useRouter()
   
   const {collectionName} = router.query
   const products = PRODUCTS.filter(product => product.collection === collectionName)

   return (
      <Box>
         <Navigation />
         <Container maxWidth="lg">
            <BreadcrumbsNavigation title={collectionName as string}/>
            <ProductList products={products}/>
         </Container>
      </Box>
   )
}

export default CollectionPage