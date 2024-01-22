import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface Post {
  id: string,
  date: string,
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
   * @returns Type:post array
   *
   */
  let filenames: string[] = fs.readdirSync(postsDirectory)
  filenames = filenames.filter(element => element.endsWith('.md'))
  
  let allPostData: Post[] = filenames.map((filename) => {
    const id: string = filename.replace(/\.md$/, '')
    const fullPath: string = path.join(postsDirectory, filename)
    const fileContents: string = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents).data
    return {
      id,
      date: matterResult.date,
      title: matterResult.title,
      description: matterResult.description,
      categories: matterResult.categories,
    }
  })
  
  // sort dates, newest to oldest.
  allPostData = allPostData.sort((a: Post, b: Post)=>{
    if (a.date < b.date){
      return 1
    }
    return -1
  })

  return allPostData
}
