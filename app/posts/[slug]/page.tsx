import GetSortedPosts from '@/utils/marky'
import { postsDirectory } from '@/utils/marky'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Article from './article'
import { Post } from '@/utils/marky';

export function generateStaticParams() {
  let posts: Post[] = GetSortedPosts()
  return posts.map(post=> ({slug:post.id}))
}

export default async function generatePage({ params }: { params: { slug: string } }) {
  const fileContents = fs.readFileSync(path.join(postsDirectory, params.slug)+'.md', 'utf8')
  const matterResult = matter(fileContents)
  matterResult['content'] = await marked.parse(matterResult.content)
  return <Article matterResult={matterResult} />
}
