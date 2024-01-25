"use client"
import { useState } from "react"
import PostList from "./post-list"
import SearchBar from "./search-bar"
import { Post } from "@/types/post"

interface HomeProps {
  posts: Post[]
}

export default function Posts({ posts }: HomeProps) {
  const [postsToDisplay, setPostsToDisplay] = useState(posts)

  return (
    <>
      <SearchBar posts={posts} setPostsToDisplay={setPostsToDisplay} />
      <PostList postsToDisplay={postsToDisplay} />
    </>
  )
}
