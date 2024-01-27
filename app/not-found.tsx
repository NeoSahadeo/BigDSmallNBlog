import Image from 'next/image'

export default function Custom404() {
  return (
    <main>
      <h1>404 - Page Not Found</h1>
      <p>What are you looking for?</p>
      <article>
        <Image
          src="/fish404.jpg"
          width={300}
          height={100}
          alt='Fish meme'
          className='w-full rounded'
        ></Image>
      </article>
    </main>
  )
}
