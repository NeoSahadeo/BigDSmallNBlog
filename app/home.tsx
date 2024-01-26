'use client';
import Link from 'next/link';
import Search from '@/components/search';
import styles from './page.module.css'
import { useState } from 'react';
import { Post } from '@/utils/marky';


export default function Home({posts}: {posts: Post[]}) {
  const [postsToDisplay, setPostsToDisplay] = useState(posts)
    return (
        <main className='pl-4 pr-4 sm:pl-0 sm:pr-0'>
        <section>
        <h1 className='title'>Big D and Small N&apos;s Blog</h1>
        <Search posts={posts} setPostsToDisplay={setPostsToDisplay}/>
        <br/>
        <ul id='blogPosts' className={styles.ul}>
        {postsToDisplay.map((post: Post) => {
            return (
                <li className={`${styles.li} `} key={post.id}>
                  <Link className='flex flex-col' href={'posts/'+post.id}>
                    <span className='justify-between flex w-100'>
                    <span className='font-light'>
                    {post.title}
                    </span>            
                    <span>
                    {post.date}
                    </span>
                    </span>
                    <span className='italic mt-1'>
                    {post.description}
                    </span>
                  </Link>
                </li>
                ) 
            })}
        </ul>
    </section>
    </main>
    );
}
