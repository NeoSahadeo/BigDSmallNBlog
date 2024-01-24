"use client"
import Link from "next/link"
import Search from "@/components/search"
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

type HomeProps = {
  posts: Post[]
}

export default function Home({ posts }: HomeProps) {
  const [postsToDisplay, setPostsToDisplay] = useState(posts)
  return (
    <div className="flex flex-col items-center justify-center px-4 grow gap-7">
      <h1 className="title">Big D and Small N&apos;s Blog</h1>
      <Search posts={posts} setPostsToDisplay={setPostsToDisplay} />

      <ScrollArea className="px-5 min-w-[500px] ">
        <div className="flex flex-col gap-10">
          {postsToDisplay.map((post: Post) => {
            return (
              <Link key={post.id} href={"posts/" + post.id}>
                <Card>
                  <CardHeader>
                    <CardTitle className="m-0">{post.title}</CardTitle>
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
