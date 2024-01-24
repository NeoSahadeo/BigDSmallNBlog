---
title: 'Syntax Highlighting in NextJs'
date: '24-01-2024'
author: 'Neo Sahadeo'
description: 'Implementing syntax highlighting in NextJs'
categories: ['life experiences', 'tutorial', 'javascript', 'js', 'highlightjs', 'syntax highlighting', 'nextjs']
---

# Introduction
If you've ever wondered how to implement syntax highlighting in NextJs then I have  my solution down below. The 'tutorial' portion starts with the heading of 'Tutorial'.

# Syntax Highlighting and Bad Parsers
A tale as old as time. I have the absolute delusion that I could build something better than someone else (I can't). Having flashbacks to my static site generation generators and templating languages both of which were terribly implemented, caused me to install pre-written and tested solutions. 
<br>
<br>
I thus stumbled into the laps of <a href="https://highlightjs.org/" style="text-decoration: underline">Highlight Js</a>. A syntax highlighting doohickey that supported every language under the Sun.
<br >
<br>
I promptly installed package and the whole #! (that's a bash joke) and ... oh wait... the parser doesn't work. I won't name names but damn it was awful. "Ok", I whisper to myself. "I'll just find another parser".
<br>
<br>
Six parses later I've lost my sanity. Each parser required me reading their docs' and implementing the function calls. None of them returned a DOM model. Some of them clearly stated that they did but none of them did.
<br>
<br>
Sometime later I found myself looking at <a href="https://github.com/jsdom/jsdom" style="text-decoration: underline">JSDom</a>. Finally, a worthy tool... oh wait... I couldn't figure out how I would update the properties of elements without taking some convoluted approach. This is entirely a skill issue so I got creative and honestly lucky. I found out that it was built into the browser the whole time.
<br>
<br>
Turns out that browsers implement string to DOM convertions (<a href="https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString" style="text-decoration:underline">parseFromString</a>). I now had everthing I needed.
# Tutorial
First of we need to use a client component in NextJs aswell as importing 'useState' and 'useEffect' to update the DOM and access the DOM.
```typescript
'use client';
import { useState, useEffect } from 'react'
import hljs from 'highlight.js'
import { magicContentGenerator } from '@/ether';

export default function Page(){
  const content: string = magicContentGenerator();
  return (
    <div dangerouslySetInnerHTML={{__html:content}}>

    </div>
)}
```
<br>
Create a some state

```typescript
const [contentState, setContentState] = useState(content)
```

<br>
And finally we implement the highlighting part. (Yes, in the end it was really simple).

#### Step 1.
Create the parser object and create virtual DOM.

```typescript
const parser = new DOMParser();
const dom = parser.parseFromString(contentState, "text/html")
```
Now we can perform operations in the virtual DOM like query selector all!
<br>
Since all the articles for this site are written in  MarkDown, codeblock are nested in pre tags. Which looks like:

```
<pre>
   <code>
      ...
   </code>
</pre>
```

<br>

#### Step 2.
Perform a query search and loop through it.

```typescript
const codeBlocks = dom.querySelectorAll('pre > code')
```

We then need to loop through all the code blocks and run the highlight function. In order to do this we need to maintain the pointer to object. A map function or forEach or similar will copy values over to a new memory location. This is bad, as we want to update the virtual DOM we created. The easiest way to do this is to create a for loop and loop with respect to the length of `codeBlocks`.


```typescript
for (let index = 0; index < codeBlocks.length; index++){
  codeBlocks[index].innerHTML = hljs.highlightAuto(
    codeBlocks[index].innerText
  ).value
}
```

#### Step 3 (Final).
Finally, we wrap everything in a 'useEffect' so we can access browser functions and update the state of `content` variable.

```typescript
const [contentState, setContentState] = useState(content)

useEffect(()=>{
  const parser = new DOMParser();
  const dom = parser.parseFromString(contentState, "text/html")
  const codeBlocks = dom.querySelectorAll('pre > code')
  console.log(codeBlocks.length)
  for (let index = 0; index < codeBlocks.length; index++){
    codeBlocks[index].innerHTML = hljs.highlightAuto(
      codeBlocks[index].innerText
    ).value
  }
  setContentState(dom.querySelector('body').innerHTML)
}, [])

```

#### Final Code:

```typescript
'use client';
import { useState, useEffect } from 'react'
import hljs from 'highlight.js'
import { magicContentGenerator } from '@/ether';

export default function Page(){
  const content: string = magicContentGenerator();
  const [contentState, setContentState] = useState(content)

  useEffect(()=>{
    const parser = new DOMParser();
    const dom = parser.parseFromString(contentState, "text/html")
    const codeBlocks = dom.querySelectorAll('pre > code')
    console.log(codeBlocks.length)
    for (let index = 0; index < codeBlocks.length; index++){
      codeBlocks[index].innerHTML = hljs.highlightAuto(
        codeBlocks[index].innerHTML
      ).value
    }
    setContentState(dom.querySelector('body').innerHTML)
  }, [])
  return (
    <div dangerouslySetInnerHTML={{__html:content}}>

    </div>
)}
```

# Conclusion
In the end, the solution was extremely elegant and simple. I should feel 'proud' and in some sense I do. If you've read this far, have a wonderful rest of your day.
<br>
_NeoSahadeo_
