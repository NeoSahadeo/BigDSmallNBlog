import GetSortedPosts from './utils/marky';
import Home from './home';

export const posts = GetSortedPosts()

export default function Page() {
  return <Home posts={posts}/>
}
