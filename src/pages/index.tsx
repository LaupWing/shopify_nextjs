import { Box, Container } from "@mui/material"
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
