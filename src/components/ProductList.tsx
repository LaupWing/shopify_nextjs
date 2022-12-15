import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material"
import { useRouter } from "next/router"
import React from "react"

interface Props {
   products: any[]
}

const Product = ({product, goToProductPage}:any) => {
   const {id, title, images, variants, handle} = product
   const {src: productImage} = images[0]
   const {price} = variants[0]

   return (
      <ImageListItem
         style={{cursor: "pointer"}}        
         onClick={() => goToProductPage(handle)}
      >
         <img 
            src={`${productImage}?w=250&fit=crop&auto=format`} 
            srcSet={`${productImage}?w=250&fit=crop&auto=format&dpr=2 2x`}
            alt={title}
            loading="lazy"
         />
         <ImageListItemBar
            title={title}
            subtitle={<span>Price: {price}</span>}
            position="below"
         />
      </ImageListItem>
   )
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
            <Product 
               key={product.handle}
               product={product}
               goToProductPage={goToProductPage}
            />
         ))}
      </ImageList>
   )
}

export default ProductList