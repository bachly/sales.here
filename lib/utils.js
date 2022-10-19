import fs from 'fs'
import path from 'path'

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), 'posts')

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))  // Only include md(x) files

export const SAMPLE_PRODUCT_PATH = path.join(process.cwd(), 'public/sampleProducts')
export const sampleProductsFilePaths = fs
    .readdirSync(SAMPLE_PRODUCT_PATH)
    .filter((path) => /\.json?$/.test(path)) // Only include json files