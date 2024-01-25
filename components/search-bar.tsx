import { Input } from "@/components/ui/input"
import { usePostSearch } from "@/hooks/usePostSearch"
import { Post } from "@/types/post"
import { Search } from "lucide-react"
import { Dispatch, SetStateAction } from "react"

interface SearchBarProps {
  posts: Post[]
  setPostsToDisplay: Dispatch<SetStateAction<Post[]>>
}

export default function SearchBar({
  posts,
  setPostsToDisplay,
}: SearchBarProps) {
  return (
    <div className="relative w-1/4">
      <Search className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 left-3 pointer-events-none" />
      <Input
        type="text"
        placeholder="Search Blogs"
        className="pl-12 pr-4 text-lg"
        onChange={(e) =>
          setPostsToDisplay(usePostSearch(e.target.value, posts))
        }
      />
    </div>
  )
}
