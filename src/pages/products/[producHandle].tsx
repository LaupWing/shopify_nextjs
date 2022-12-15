import { Box, Button, Grid, Typography } from "@mui/material"
import { Container } from "@mui/system"
import Image from "next/image"
import { useRouter } from "next/router"
import React from 'react'
import Navigation from "../../components/Navigation"
import PRODUCTS from "../../data"

const ProductPage = () => {
   const router = useRouter()
   const {productHandle} = router.query
   const product = PRODUCTS.find(p => p.handle === parseInt(productHandle as string))
   const {name, image, price} = product || {}

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
                        src={image as string}
                        alt={`Picture of ${name}`}
                        width={500}
                        height={500}
                     />
                  </Grid>
               </Grid>
               <Grid item xs={6}>
                  <Typography variant="h3" my={2}>{name}</Typography>
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

export default ProductPage