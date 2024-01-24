'use client';

import { useState, useEffect } from "react"
import { marked } from "marked"
import { BaseSyntheticEvent, Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";

import { saveFile } from "@/utils/saveFile";

interface HTMLElementNew extends HTMLElement {
  value?: string
}

async function updatePreview (e: BaseSyntheticEvent, setPreview: Dispatch<SetStateAction<string>>) {
  const text = e.target.value 
  const parsedContent: string = await marked.parse(text)
  setPreview(parsedContent)
}

export function MarkMe() {
  const [preview, setPreview] = useState('')
  return (
    <main className="flex items-center justify-start">
      <form className="flex w-full flex-col" onSubmit={async (e)=> {
      e.preventDefault(); 
      const content: HTMLElementNew | null = document.getElementById('content') 
      const filename: HTMLElementNew | null = document.getElementById('filename')

      if (!filename?.value) { alert('No filename') ;return null;}

      const allowed = prompt(`This will overwrite exisiting files with the same name, please be sure. Type 'yes' to continue.`)

        saveFile({
          filename: filename.value,
          content: content?.value
          });
      if (allowed === 'yes') {
      }
      }}>
        <div className="flex w-full">
          <textarea id='content' className="flex w-full h-full border border-yellow-500 p-2" placeholder="Start Writing Markdown" onKeyUp={(e)=>{updatePreview(e, setPreview)}}>

          </textarea>
          <article className="flex w-full flex-col pl-4" dangerouslySetInnerHTML={{__html: preview}}>
          </article>
        </div>
        <span className="mt-4 flex flex-row">
          <Input id='filename' placeholder="Enter File name" className="w-44 mr-4"/>
          <Button className="max-w-min bg-green-500" type="submit">SAVE</Button>
        </span>
      </form>
    </main>
  )
}
