'use client';
import {BaseSyntheticEvent} from 'react';
import styles from './search.module.css'
import { Post } from '@/utils/marky';
import { Search as SearchSVG } from 'lucide-react';

const search = (e:BaseSyntheticEvent, posts: Post[]) => {
  /* Damian Fixed. 
   *
   * @return
   * posts array that has been filtered based on {title, description, date}
   * */
  const value = e.target.value.toUpperCase()
  return posts.filter(post => (
    post.title.toUpperCase().includes(value) ||
    post.description.toUpperCase().includes(value) ||
    post.date.toUpperCase().includes(value)
  ))
}

export default function Search({posts, setPostsToDisplay}: {posts: Post[], setPostsToDisplay: any}) {
  return(
  <span className="flex flex-col sm:flex-row sm:items-center border px-2 py-1 rounded-sm border-gray-400">
    <label style={{textWrap: 'nowrap'}} className='w-min'>Search blogs: </label>
    <span className='flex flex-row w-full items-center'>
    <input className={`${styles.input} dark:bg-transparent`} onInput={(e)=>setPostsToDisplay(search(e, posts))}></input>
    <SearchSVG />
    </span>
  </span>
  )
}
