import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Update the Post interface to change page contents
export interface Post {
  id: string,
  date: string,
  author: string,
  title: string,
  description: string,
  categories: string[],
}

export const postsDirectory = path.join(process.cwd(), 'posts')

export default function GetSortedPosts(): Post[] {
  /**
   * Uses Nodejs fs to get all files and sort them based on date and markdown (file type); 
   * the directory is based on postsDirectory
   *
   * @returns Type:Post array
   *
   */
  return fs.readdirSync(postsDirectory)
  .filter(filename => filename.endsWith('.md')
   ).map((filename) => {
    const id = filename.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents).data as Post
    matterResult['id'] = id
    return matterResult
  }).sort((a: Post, b: Post) => a.date < b.date ? 1 : -1)
}
