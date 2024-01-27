'use client'
import { useState, useEffect } from 'react'
import { highlighter } from '@/utils/highlighter'
import { GrayMatterFile } from 'gray-matter'
import {Post} from '@/utils/marky'
import DOMPurify from 'isomorphic-dompurify'

/* import type { Metadata } from "next";
import {Author} from 'next/dist/lib/metadata/types/metadata-types' */

export default function Article({matterResult}: {matterResult: GrayMatterFile<string>} ) {

  const {
    id,
    author,
    description,
    title,
    categories,
    date,
  } = matterResult.data as Post

  /* metadata = {
    title,
    description,
    keywords: categories.join(', '),
    authors: author as Author,
  } */

  const [contentState, setContentState] = useState(matterResult.content)

  useEffect(()=>{
    const parser = new DOMParser();
    const highlightedContent = highlighter(parser, contentState)
    setContentState(highlightedContent)
  }, [])

  return (
    <main className='pl-4 pr-4 sm:pl-0 sm:pr-0'>
      <meta name='description' content={description}></meta>
      <meta name='author' content={author}></meta>
      <meta name='keywords' content={categories.join(', ')}></meta>
      <title>{title}</title>
      <section className='pl-2 pr-2 sm:pl-0 sm:pr-0'>
        <h1 className='title'>{title}</h1>
        <p style={{marginBottom: '0.5rem'}}><i>{description}</i></p>
        <p>{author}</p>
        <p style={{marginBottom: '1rem'}}>{date}</p>
        <hr className='bg-gray-300'></hr>
        <article dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(contentState, { ADD_TAGS: ['iframe'] })
        }}>
        </article>
      </section>
    </main>
    )
}
