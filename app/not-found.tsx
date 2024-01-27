import Image from 'next/image'

export default async function Custom404() {
  return (
    <main>
      <h1>404 - Page Not Found</h1>
      <p>What are you looking for?</p>
      <article>
        <img src='https://i.pinimg.com/736x/f8/4b/d0/f84bd082d1e31fa54d93af385b759be5.jpg' width={300} height={100} className='w-full rounded' alt='Fish Meme'></img>
        {/* <Image
          src="/fish404.jpg"
          width={300}
          height={100}
          alt='Fish meme'
          className='w-full rounded'
        ></Image> */}
      </article>
    </main>
  )
}
