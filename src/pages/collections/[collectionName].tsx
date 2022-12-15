import React from 'react'
import {Container, Box} from "@mui/material"
import Navigation from "../../components/Navigation"
import BreadcrumbsNavigation from "../../components/BreadcrumbsNavigation"
import ProductList from "../../components/ProductList"
import { GetServerSideProps } from "next"
import { parseShopifyResponse, shopifyCLient } from "../../../lib/shopify"

const CollectionPage = ({collectionName, products}:any) => {
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


export const getServerSideProps:GetServerSideProps = async ({params}) =>{
   const {collectionName} = params as any
   const collectionData = await shopifyCLient.collection.fetchAllWithProducts()
   const collections = parseShopifyResponse(collectionData)
   const collection = collections.find((collection:any) => collection.handle === collectionName)

   return {
      props: {
         collectionName,
         products: collection.products
      }
   }
}
export default CollectionPage