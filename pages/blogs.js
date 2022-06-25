
import BlogCard from '../components/BlogCard'
import Link from 'next/link'


const Blogs = ({blogs}) => {
  return (
    <div className={'h-full p-5'}>
        <center className='w-[70%] mx-auto'>
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

export default Blogs