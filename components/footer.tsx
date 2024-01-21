'use client';
import Link from 'next/link';
import { DOMElement, useEffect, useState } from 'react';
import { SVGProps } from 'react';
import styles from './footer.module.css';

function GithubSvg(props: SVGProps<SVGSVGElement>) {
  return (
      <svg width="2rem" height="2rem" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}> <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><defs></defs><path className="cls-1" d="M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5"></path></g></svg>
      )
}

function MdiInstagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24" {...props}><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path></svg>
  )
}

export default function Footer() {
  useEffect(()=> {
  })
  return (
  <footer className={`border-t-2 ${styles.footer}`}>
    <ul>
      <li className='mt-4 mb-4 flex flex-row items-center'>
      Damian:
      <Link href='https://github.com/ST10019838' className='flex flex-row items-center ml-2'>
        Github
      </Link>
      </li>
      <li className='mt-4 mb-4 flex flex-row items-center'>
      Neo:
      <Link href='https://github.com/neosahadeo' className='flex flex-row items-center ml-2'>
        Github
      </Link>
      <Link href='https://www.instagram.com/neosahadeo/' className='flex flex-row ml-2 items-center'>
        Instagram
      </Link>
      </li>
    </ul>
    <span className='font-bold'>To C or not to C, that is the question!</span>
  </footer>
  )
}
