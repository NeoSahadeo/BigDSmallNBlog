import hljs from "highlight.js";

interface CustomElement extends Element {
  innerText: string,
}

export function highlighter(parser: DOMParser, content: string): string{
  const dom = parser.parseFromString(content, "text/html")
  const codeBlocks: NodeListOf<CustomElement> = dom.querySelectorAll('pre > code')
  for (let index = 0; index < codeBlocks.length; index++){
    let highlighted = hljs.highlightAuto(
      codeBlocks[index].innerText
    ).value
    codeBlocks[index].innerHTML = highlighted
  }
  return dom.querySelector('body')?.innerHTML || ''
}
