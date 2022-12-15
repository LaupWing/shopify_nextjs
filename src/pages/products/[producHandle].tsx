import { Box, Button, Grid, Typography } from "@mui/material"
import { Container } from "@mui/system"
import { GetServerSideProps } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import React from 'react'
import { parseShopifyResponse, shopifyCLient } from "../../../lib/shopify"
import Navigation from "../../components/Navigation"
import PRODUCTS from "../../data"

const ProductPage = ({product}:any) => {
   const {id, title, images, variants, handle} = product
   const {src: productImage} = images[0]
   const {price} = variants[0]

   return (
      <Box>
         <Navigation/>
         {product && (
            <Container maxWidth="lg">
               <Grid 
                  container 
                  direction={"row"}
               >
                  <Grid item xs={6}>
                     <Image
                        src={productImage}
                        alt={`Picture of ${title}`}
                        width={500}
                        height={500}
                     />
                  </Grid>
               </Grid>
               <Grid item xs={6}>
                  <Typography variant="h3" my={2}>{title}</Typography>
                  <Grid mt={4}>
                     <Typography variant="h6" component={"span"}>Price: </Typography>
                     <Typography variant="body1" component={"span"}>{price}</Typography>
                  </Grid>
                  <Grid mt={1}>
                     <Button variant="contained">Add to cart</Button>
                  </Grid>
               </Grid>
            </Container>
         )}
      </Box>
   )
}

export const getServerSideProps:GetServerSideProps  = async ({params}) =>{
   const {productHandle} = params as any
   const product = await shopifyCLient.product.fetchByHandle(productHandle)

   return {
      props:{
         product: parseShopifyResponse(product)
      }
   }
}

export default ProductPage