import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { postFilePaths, POSTS_PATH, productFilePaths, PRODUCTS_PATH } from './utils';

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

export function getAllCollections({ fields }) {
  const allCollections = productFilePaths.map((filePath) => {
    const fullPath = path.join(PRODUCTS_PATH, filePath);
    const source = fs.readFileSync(fullPath);
    const stat = fs.statSync(fullPath);
    const slug = filePath.replace(/\.json$/, '')
    const data = JSON.parse(source);

    let result = {
      slug,
      modifiedTime: stat.mtime.toTimeString()
    };

    fields.forEach(field => {
      result = {
        ...result,
        [field]: data[field]
      }
    })

    console.log('result', result);

    return result;
  }).sort((collection1, collection2) => (collection1.modifiedTime > collection2.modifiedTime ? 1 : -1)) // sort posts by modifiedTime in descending order

  return allCollections;
}