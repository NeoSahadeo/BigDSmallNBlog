'use client';
import {BaseSyntheticEvent} from 'react';
import styles from './search.module.css'
import { Post } from '@/utils/marky';
import { Search as SearchSVG } from 'lucide-react';

const search = (e:BaseSyntheticEvent, posts: Post[]) => {
  /* Damian Fixed uwu. 
   *
   * @return
   * posts array that has been filtered based on {title, description, date}
   * */
  const value = new RegExp( e.target.value, 'gi')
  return posts.filter(post => {
    return (
    post.title?.match(value) || 
    post.description?.match(value) ||
    post.date?.match(value) ||
    post.categories?.some(element => element.match(value))
    )
  })
}

export default function Search({posts, setPostsToDisplay}: {posts: Post[], setPostsToDisplay: any}) {
  return(
  <span className="flex flex-col sm:flex-row sm:items-center border px-2 py-1 rounded-sm border-gray-400">
    <span className='flex flex-row w-full items-center'>
    <input className={`${styles.input} dark:bg-transparent`} onInput={(e)=>setPostsToDisplay(search(e, posts))} placeholder='Search Blogs'></input>
    <SearchSVG />
    </span>
  </span>
  )
}
