import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import BlogCard from '../components/BlogCard'
import { getSession, SessionProvider } from "next-auth/react"

export default function Home({blogs}) {
  const session = getSession()
  console.log(session)
  
  return (
    <div className={'h-full p-5'}>
        <center className='w-[70%] mx-auto border'>
          {blogs.map((item) => {
            return (
              <Link key={item.id} href={`/blogs/${item.id}`}>
                <a>
                  <BlogCard data={item} />
                </a>
              </Link>
            )
          })}
        </center>
    </div>
  )
}


export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.API_URL}/api/blogs?populate=*`)
  const blogs = await res.json()
  return {
    props: {
      blogs: blogs.data,
    }, // will be passed to the page component as props
  }
}