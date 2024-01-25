import GetSortedPosts from "@/utils/marky"
import { marked } from "marked"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Metadata } from "next"
import useFileContents from "@/hooks/useFileContents"
import Markdown from "markdown-to-jsx"

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  let posts = GetSortedPosts()
  return posts.map((post) => {
    return { slug: post.id }
  })
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { data: metadata } = useFileContents(params.slug)

  return {
    title: metadata.title,
    description: metadata.description,
    authors: metadata.author,
    keywords: metadata.categories,
  }
}

export default async function BlogPage({ params }: PageProps) {
  const { data: metadata, content } = useFileContents(params.slug)
  const parsedFileContents = marked.parse(content)

  return (
    <div className="flex flex-col items-center px-4 grow gap-7 ">
      <ScrollArea className="px-5">
        <section className="px-2 sm:px-0 flex flex-col gap-1">
          <h1 className="text-5xl font-bold">{metadata.title}</h1>
          <p style={{ marginBottom: "0.5rem" }}>
            <i>{metadata.description}</i>
          </p>
          <p>{metadata.author}</p>
          <p style={{ marginBottom: "1rem" }}>{metadata.date}</p>
          <hr className="bg-gray-300"></hr>
          {/* <article
            dangerouslySetInnerHTML={{ __html: parsedFileContents }}
          ></article> */}
          {/* <article>{parsedFileContents}</article> */}
        </section>

        <Markdown
        // options={{
        //   overrides: {
        //     p: {
        //       props: {
        //         className: "text-blue-500",
        //       },
        //     },
        //   },
        // }}
        >
          {parsedFileContents as string}
        </Markdown>
      </ScrollArea>
    </div>
  )
}
