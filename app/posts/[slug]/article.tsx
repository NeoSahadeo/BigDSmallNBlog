'use client'
import { useState, useEffect } from 'react'
import { highlighter } from '@/utils/highlighter'
import { GrayMatterFile } from 'gray-matter'


export default function Article({matterResult, content}: {matterResult: GrayMatterFile<string>, content: string} ) {
  /* I don't know what holy lord helped my hands write this. I ain't 
     changing it any time soon. :''')
  */
  const [contentState, setContentState] = useState(content)

  useEffect(()=>{
    const parser = new DOMParser();
    const highlightedContent = highlighter(parser, contentState)
    setContentState(highlightedContent)
  }, [])

  return (
    <main className='pl-4 pr-4 sm:pl-0 sm:pr-0'>
      <meta name='description' content={matterResult.data.description}></meta>
      <meta name='author' content={matterResult.data.author}></meta>
      <meta name='keywords' content={matterResult.data.categories}></meta>
      <title>{matterResult.data.title}</title>
      <section className='pl-2 pr-2 sm:pl-0 sm:pr-0'>
        <h1 className='title'>{matterResult.data.title}</h1>
        <p style={{marginBottom: '0.5rem'}}><i>{matterResult.data.description}</i></p>
        <p>{matterResult.data.author}</p>
        <p style={{marginBottom: '1rem'}}>{matterResult.data.date}</p>
        <hr className='bg-gray-300'></hr>
        <article dangerouslySetInnerHTML={{__html: contentState}}>
        </article>
      </section>
    </main>
    )
}
