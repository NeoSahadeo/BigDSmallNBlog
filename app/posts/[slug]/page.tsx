import GetSortedPosts from '@/utils/marky'
import { postsDirectory } from '@/utils/marky'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Article from './article'

export function generateStaticParams() {
  let posts = GetSortedPosts()
  return posts.map(post=>{
    return{slug:post.id}
  })
}

export default async function generatePage({ params }: { params: { slug: string } }) {
  const fullPath = path.join(postsDirectory, params.slug)+'.md'
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)
  const content: string = await marked.parse(matterResult.content)

  return <Article content={content} matterResult={matterResult} />
}
