import fs from 'fs'
import path, { join } from 'path'
import matter from 'gray-matter'
import { postFilePaths, POSTS_PATH } from './mdxUtils';

export function getAllPosts() {
    const allPosts = postFilePaths.map((filePath) => {
        const fullPath = path.join(POSTS_PATH, filePath);
        const source = fs.readFileSync(fullPath)
        const stat = fs.statSync(fullPath)
        const { data } = matter(source) // { content, data }
        const slug = filePath.replace(/\.mdx$/, '')

        return {
            post: {
                ...data,
                modifiedTime: stat.mtime.toTimeString()
            },
            slug
        }
    }).sort((post1, post2) => (post1.modifiedTime > post2.modifiedTime ? 1 : -1)) // sort posts by modifiedTime in descending order

    return allPosts;
}