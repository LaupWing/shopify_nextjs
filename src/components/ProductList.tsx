import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material"
import { useRouter } from "next/router"
import React from "react"

interface Props {
   products: any[]
}

const ProductList:React.FC<Props> = ({products}) => {
   const router = useRouter()
   const goToProductPage = (productHandle: string) => router.push(`/products/${productHandle}`)

   return (
      <ImageList 
         cols={5}
         gap={20}
      >
         {products.map(product =>(
            <ImageListItem 
               key={product.image}
               style={{cursor: "pointer"}}
               onClick={() => goToProductPage(product.handle)}
            >
               <img 
                  src={`${product.image}?w=250&fit=crop&auto=format`} 
                  srcSet={`${product.image}?w=250&fit=crop&auto=format&dpr=2 2x`}
                  alt={product.name}
                  loading="lazy"
               />
               <ImageListItemBar
                  title={product.name}
                  subtitle={<span>Price: {product.price}</span>}
                  position="below"
               />
            </ImageListItem>
         ))}
      </ImageList>
   )
}

export default ProductList