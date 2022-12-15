import Client from "shopify-buy"

export const shopifyCLient = Client.buildClient({
   storefrontAccessToken: process.env.SHOPIFY_STORE_FRONT_ACCESS_TOKEN as string,
   domain: process.env.SHOPIFY_STORE_DOMAIN as string
})

export const parseShopifyResponse = (response:any) => JSON.parse(JSON.stringify(response))
