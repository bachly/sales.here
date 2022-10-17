import fs from 'fs'
import path, { join } from 'path'
import matter from 'gray-matter'
import { postFilePaths, POSTS_PATH } from './mdxUtils';
import PRODUCTS from "../_sampleData/products-jam";
import Shopify from '@shopify/shopify-api';

export function getAllPosts() {
    const allPosts = postFilePaths.map((filePath) => {
        const fullPath = path.join(POSTS_PATH, filePath);
        const source = fs.readFileSync(fullPath)
        const stat = fs.statSync(fullPath)
        const { data } = matter(source) // { content, data }
        const slug = filePath.replace(/\.mdx$/, '')

        return {
            ...data,
            modifiedTime: stat.mtime.toTimeString(),
            slug
        }
    }).sort((post1, post2) => (post1.modifiedTime > post2.modifiedTime ? 1 : -1)) // sort posts by modifiedTime in descending order

    return allPosts;
}

export function getAllProducts() {
    return PRODUCTS
}

export async function getFeaturedProductsFromShopify() {
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
            products (first: 12, query: "${PRODUCTS_FILTER}") {
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
    return edges.map(edge => ({ ...edge.node }))
}