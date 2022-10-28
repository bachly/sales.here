import fs from 'fs'
import path from 'path'

export const POSTS_PATH = path.join(process.cwd(), 'data/posts')
export const postFilePaths = fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))  // Only include md(x) files

export const PRODUCTS_PATH = path.join(process.cwd(), 'data/products')
export const collectionFilePaths = fs
    .readdirSync(PRODUCTS_PATH)
    .filter((path) => /\.json?$/.test(path)) // Only include json files

export function productFilePaths() {
    const result = [];
    collectionFilePaths.forEach(collectionFilePath => {
        const collection = JSON.parse(fs.readFileSync(path.join(PRODUCTS_PATH, collectionFilePath)));
        const collectionSlug = collection.slug;
        const productSlugs = Object.keys(collection.products);

        productSlugs.forEach(productSlug => {
            result.push(`${collectionSlug}_${productSlug}`)
        })
    })

    return result;
}