import fs from 'fs'
import path from 'path'

export const POSTS_PATH = path.join(process.cwd(), 'data/posts')
export const postFilePaths = fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))  // Only include md(x) files

export const PRODUCTS_PATH = path.join(process.cwd(), 'data/products')
export const productFilePaths = fs
    .readdirSync(PRODUCTS_PATH)
    .filter((path) => /\.json?$/.test(path)) // Only include json files