import GetSortedPosts from "@/utils/marky"
import Posts from "@/components/posts"

const posts = GetSortedPosts()

export default function Page() {
  return (
    <div className="flex flex-col items-center px-4 grow gap-7">
      <h1 className="text-4xl font-bold">Big D and Small N&apos;s Blog</h1>

      <Posts posts={posts} />
    </div>
  )
}
