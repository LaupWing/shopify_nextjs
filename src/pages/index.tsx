import { Box, Container } from "@mui/material"
import { parseShopifyResponse, shopifyCLient } from "../../lib/shopify"
import Navigation from "../components/Navigation"
import ProductList from "../components/ProductList"
import PRODUCTS from "../data"

export default function Home() {
   return (
      <Box>
         <Navigation />
         <Container maxWidth="lg">
            <ProductList products={PRODUCTS}/>
         </Container>
      </Box>
   )
}

export const getServerSideProps = async () =>{
   const products = await shopifyCLient.product.fetchAll()

   return {
      props:{ 
         products: parseShopifyResponse(products)
      }
   }
}