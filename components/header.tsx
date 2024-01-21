'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Switch } from "@/components/ui/switch"
import clsx from 'clsx';
import styles from './header.module.css';
import './header.css'
import { ModeToggle } from './toggle';


export default function Header() {
  /* Returns the Header component */
  const [scrollPos, setScrollPos] = useState(0)

  useEffect(()=> {
    window.addEventListener('scroll', ()=> setScrollPos(window.scrollY))
  })

  return <header className={clsx(styles.header, 
  {
    'header-hover': scrollPos != 0
  })}>
    <span className={styles.logo}>
      <sup>D</sup><span></span><sub>N</sub>
    </span>
    <nav className='ml-auto mr-4'>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
      </ul>
    </nav>
    <ModeToggle/>
  </header>
}
