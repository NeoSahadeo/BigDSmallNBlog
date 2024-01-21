import GetSortedPosts from '../../utils/marky'
import { postsDirectory } from '../../utils/marky'
import fs from 'fs'
import path from 'path'
import matter, {language} from 'gray-matter'
import { remark } from 'remark';
import html from 'remark-html';

export function generateStaticParams() {
  let posts = GetSortedPosts()
    return posts.map(post =>{ return { slug: post.id} }) }

async function generatePage({ params }: { params: { slug: string } }) {
  const fullPath = path.join(postsDirectory, params.slug)+'.md'
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  console.log(matterResult.data.categories)
  return (
    <main className='pl-4 pr-4 sm:pl-0 sm:pr-0'>
      <meta name='description' content={matterResult.data.description}></meta>
      <meta name='author' content={matterResult.data.author}></meta>
      <meta name='keywords' content={matterResult.data.categories}></meta>
      <title>{matterResult.data.title}</title>
      <section className='pl-2 pr-2 sm:pl-0 sm:pr-0'>
        <h1 style={{marginBottom: '0rem'}}>{matterResult.data.title}</h1>
        <p style={{marginBottom: '0.5rem'}}><i>{matterResult.data.description}</i></p>
        <p>{matterResult.data.author}</p>
        <p style={{marginBottom: '1rem'}}>{matterResult.data.date}</p>
        <hr className='bg-gray-300'></hr>
        <article dangerouslySetInnerHTML={{__html: contentHtml}}>
        </article>
      </section>
    </main>
    )
}

export default async function Page({ params }: { params: { slug: string } }) {
  return generatePage({params})
}
