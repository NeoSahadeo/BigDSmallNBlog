'use client'
import { useState, useEffect, createElement } from 'react'
import hljs from 'highlight.js'
import '@/public/tomorrow-night-bright.css'


export default function Article({matterResult, content}) {
  /* I don't know what holy lord helped my hands write this. I ain't 
     changing it any time soon. :''')
  */
  const [contentState, setContentState] = useState(content)
  
  useEffect(()=>{
    const parser = new DOMParser();
    const dom = parser.parseFromString(contentState, "text/html")
    const codeBlocks = dom.querySelectorAll('pre > code')
    console.log(codeBlocks.length)
    let index = 0 
    for (; index < codeBlocks.length; index++){
      codeBlocks[index].innerHTML = hljs.highlightAuto(
        codeBlocks[index].innerHTML
      ).value
    }
    setContentState(dom.querySelector('body').innerHTML)
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
