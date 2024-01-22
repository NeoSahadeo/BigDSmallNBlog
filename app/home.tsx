'use client';
import Link from 'next/link';
import Search from '@/components/search';
import styles from './page.module.css'
import { useState } from 'react';
import { Post } from './utils/marky';

type HomeProps = {
  posts: Post[]
}

export default function Home({posts}: HomeProps) {
  const [postsToDisplay, setPostsToDisplay] = useState(posts)
    return (
        <main className='pl-4 pr-4 sm:pl-0 sm:pr-0'>
        <section>
        <h1>Big D and Small N&apos;s Blog</h1>
        <Search posts={posts} setPostsToDisplay={setPostsToDisplay}/>
        <ul id='blogPosts' className={styles.ul}>
        {postsToDisplay.map((post: Post) => {
            return (
                <li className={`${styles.li} `} key={post.id}>
                  <Link className='flex flex-col' href={'posts/'+post.id}>
                    <span className='justify-between flex w-100'>
                    <span>
                    {post.title}
                    </span>            
                    <span>
                    {post.date}
                    </span>
                    </span>
                    <span className='italic'>
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