import GetSortedPosts from "@/utils/marky"
import { postsDirectory } from "@/utils/marky"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { marked } from "marked"
import { ScrollArea } from "@/components/ui/scroll-area"

export function generateStaticParams() {
  let posts = GetSortedPosts()
  return posts.map((post) => {
    return { slug: post.id }
  })
}

export default async function generatePage({
  params,
}: {
  params: { slug: string }
}) {
  const fullPath = path.join(postsDirectory, params.slug) + ".md"
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const matterResult = matter(fileContents)
  const contents = marked.parse(matterResult.content)

  return (
    <div className="flex flex-col items-center px-4 grow gap-7 ">
      <meta name="description" content={matterResult.data.description}></meta>
      <meta name="author" content={matterResult.data.author}></meta>
      <meta name="keywords" content={matterResult.data.categories}></meta>
      <title>{matterResult.data.title}</title>

      <ScrollArea className="px-5">
        <section className="px-2 sm:px-0 flex flex-col gap-1">
          <h1 className="text-5xl font-bold">{matterResult.data.title}</h1>
          <p style={{ marginBottom: "0.5rem" }}>
            <i>{matterResult.data.description}</i>
          </p>
          <p>{matterResult.data.author}</p>
          <p style={{ marginBottom: "1rem" }}>{matterResult.data.date}</p>
          <hr className="bg-gray-300"></hr>
          <article dangerouslySetInnerHTML={{ __html: contents }}></article>
        </section>
      </ScrollArea>
    </div>
  )
}
