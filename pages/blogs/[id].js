import Image from 'next/image'

const Blogs = ({blog}) => {
  return (
    <div className='w-[70%] mx-auto border'>
      <h1>{blog.title}</h1>
      <h3>by Andrea Jones</h3>
      <img 
        src='/pic.jpg'
      />
      <body>
        {blog.body}
      </body>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(`${process.env.API_URL}/api/blogs/${id}?populate=*`)
  const blog = await res.json()
  console.log(blog.data)
  return {
    props: {
      blog: blog.data.attributes
    }, // will be passed to the page component as props
  }
}


export default Blogs