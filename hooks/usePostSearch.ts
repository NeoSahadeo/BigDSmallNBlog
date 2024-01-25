import { Post } from "@/types/post"

export function usePostSearch(postToSearch: string, posts: Post[]) {
  /* Damian Fixed uwu.
   *
   * @return
   * posts array that has been filtered based on {title, description, date}
   * */
  const value = new RegExp(postToSearch, "gi")

  return posts.filter(
    (post) =>
      post.title.match(value) ||
      post.description.match(value) ||
      post.date.match(value) ||
      post.categories.some((element) => element.match(value))
  )
}
