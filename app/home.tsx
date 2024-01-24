"use client"
import Link from "next/link"
import { useState } from "react"
import { Post } from "@/utils/marky"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

type HomeProps = {
  posts: Post[]
}

export default function Home({ posts }: HomeProps) {
  const [postsToDisplay, setPostsToDisplay] = useState(posts)

  const search = (e: string) => {
    /* Damian Fixed uwu.
     *
     * @return
     * posts array that has been filtered based on {title, description, date}
     * */
    const value = new RegExp(e, "gi")

    return posts.filter(
      (post) =>
        post.title.match(value) ||
        post.description.match(value) ||
        post.date.match(value) ||
        post.categories.some((element) => element.match(value))
    )
  }

  return (
    <div className="flex flex-col items-center px-4 grow gap-7">
      <h1 className="text-4xl font-bold">Big D and Small N&apos;s Blog</h1>

      <div className="relative w-1/4">
        <Search className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 left-3 pointer-events-none" />
        <Input
          type="text"
          placeholder="Search Blogs"
          className="pl-12 pr-4 text-lg"
          onChange={(e) => setPostsToDisplay(search(e.target.value))}
        />
      </div>

      <ScrollArea className="px-5 min-w-[500px]">
        <div className="flex flex-col gap-10">
          {postsToDisplay.map((post: Post) => {
            return (
              <Link key={post.id} href={"posts/" + post.id}>
                <Card>
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription className="flex text-md gap-2 items-center">
                      {post.date} | By 'Author'
                    </CardDescription>
                  </CardHeader>
                  <CardContent>{post.description}</CardContent>
                  <CardFooter>
                    <Button className="w-full"> Read More</Button>
                  </CardFooter>
                </Card>
              </Link>
            )
          })}
        </div>
      </ScrollArea>
    </div>
  )
}
