import Image from 'next/image'

const Blogs = ({blog, blogPic}) => {

  return (  
    <div className='w-[50%] mx-auto'>
      <div className='mb-5'>
        <h1 className='text-[20px] font-bold mb-3'>{blog.title}</h1>
        <div className='pic-wrapper w-[405px]'>
          <img 
            src={blogPic}
            className='w-full h-full mb-3'
          />
        </div>
        <h3 className='text-[#aab8c2] mb-1'>By Hussain</h3>
        <h3 className='text-[#aab8c2] mb-1'>Wednesday, 25 May 2022</h3>
      </div>
      <div className='text-justify'>
        {blog.body}
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(`${process.env.API_URL}/api/blogs/${id}?populate=*`)
  const blog = await res.json()
  const blogPic = blog.data.attributes.img.data === null ? '/pic.jpg' : `${process.env.API_URL}${blog.data.attributes.img.data[0].attributes.url}`
  return {
    props: {
      blog: blog.data.attributes,
      blogPic: blogPic
    }, // will be passed to the page component as props
  }
}


export default Blogs