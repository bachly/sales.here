import Shopify from "@shopify/shopify-api";

export default async function GetAllProducts(req, res) {
  try {
    const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
    const shop = process.env.SHOPIFY_STORE_URL;
    const storefrontClient = new Shopify.Clients.Storefront(
      shop,
      storefrontAccessToken,
    );

    const PRODUCTS_FILTER = 'available_for_sale:true AND tag:homepage';

    // Use client.query and pass your query as `data`
    const result = await storefrontClient.query({
      data: `{
        products (first: 10, query: "${PRODUCTS_FILTER}") {
          edges {
            node {
              id
              handle
              title
              featuredImage {
                altText
                height
                width
                id
                url
              }
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              compareAtPriceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }`,
    });

    const edges = result?.body?.data?.products?.edges || [];
    res.status(200).json({
      data: edges.map(edge => ({ ...edge.node }))
    })
  } catch (error) {
    res.status(404).json({
      error
    })
  }
}