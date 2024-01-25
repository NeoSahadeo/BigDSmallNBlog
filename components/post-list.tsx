import { ScrollArea } from "@/components/ui/scroll-area"
import PostListItem from "./post-list-item"
import { Post } from "@/types/post"

interface PostListProps {
  postsToDisplay: Post[]
}

export default function PostList({ postsToDisplay }: PostListProps) {
  return (
    <ScrollArea className="px-5 min-w-[500px]">
      <div className="flex flex-col gap-10">
        {postsToDisplay.map((post: Post) => (
          <PostListItem post={post} key={post.id} />
        ))}
      </div>
    </ScrollArea>
  )
}
