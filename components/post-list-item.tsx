import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Post } from "@/types/post"

interface PostListItemProps {
  post: Post
}

export default function PostListItem({ post }: PostListItemProps) {
  return (
    <Link href={"posts/" + post.id}>
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
}
