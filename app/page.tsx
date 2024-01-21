import Link from 'next/link';
import {get} from 'http';
import styles from './page.module.css'
import GetSortedPosts from './utils/marky';

export default function Page() {
   let posts = GetSortedPosts()
  return (
  <main>
    <section>
      <h1>Big D and Small N&apos;s Blog</h1>
        <ul className={styles.ul}>
        { posts.map((post) => {
          if (post == null) {
            return null
          }
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
            <i>
              {post.description}
            </i>
          </Link>
          </li>
          )
        })}
        </ul>
    </section>
  </main>
  );
}
