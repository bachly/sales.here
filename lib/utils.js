import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import _ from 'underscore';

const POSTS_PATH = path.join(process.cwd(), 'data/posts')
const postFilePaths = fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))  // Only include md(x) files

const STORE_DATA_PATH = path.join(process.cwd(), 'data/store');

export function getAllPosts() {
    const allPosts = postFilePaths.map((filePath) => {
        const fullPath = path.join(POSTS_PATH, filePath);
        const source = fs.readFileSync(fullPath)
        const stat = fs.statSync(fullPath)
        const { data } = matter(source) // { content, data }
        const slug = filePath.replace(/\.mdx$/, '')

        return {
            ...data,
            modifiedTime: stat.mtimeMs,
            slug
        }
    }).sort((post1, post2) => (post1.modifiedTime > post2.modifiedTime ? -1 : 1)) // sort posts by modifiedTime in descending order

    return allPosts;
}

export function getStoreCollections() {
    const source = fs.readFileSync(path.join(STORE_DATA_PATH, 'collections.json'));
    const data = JSON.parse(source);
    return data;
}

export function getStoreFeaturedCollections() {
    const source = fs.readFileSync(path.join(STORE_DATA_PATH, 'featured-collections.json'));
    const featuredCollections = JSON.parse(source);

    Object.keys(featuredCollections).forEach(collectionSlug => {
        featuredCollections[collectionSlug] = getCollectionBySlug({ slug: collectionSlug })
    })

    return featuredCollections;
}

export function getStoreProducts() {
    const source = fs.readFileSync(path.join(STORE_DATA_PATH, 'products.json'));
    const data = JSON.parse(source);
    return data;
}

export function getCollectionBySlug({ slug }) {
    const storeCollections = getStoreCollections();
    const storeProducts = getStoreProducts();
    const collection = storeCollections[slug];

    Object.keys(collection.products).forEach(productSlug => {
        collection.products[productSlug] = storeProducts[productSlug]
    })

    return {
        ...collection,
        slug
    }
}