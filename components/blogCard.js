import Image from 'next/image'

const BlogCard = ({data}) => {
    let imgURL = data.attributes.img.data === null ? '/pic.jpg' : `${process.env.API_URL}${data.attributes.img.data[0].attributes.url}`;
    console.log('inside BlogCard: ', imgURL)
  return (
      <div className='w-[50%] mb-10 flex justify-around border'>
        <div className="card rounded w-full overflow-hidden" style={{backgroundColor: '#fff', }}>
            <div 
            className="overflow-hidden rounded mb-3 bg-cover relative w-full min-h-[260px] md:min-h-[200px]" 
            style={{ backgroundImage: `url(${imgURL})` ,backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}/>

            <div className='text-left text-[20px] flex justify-between'>
                <p className='text-md font-bold mb-3'>{data.attributes.title}</p>
            </div>

            <div className='cardFooter text-left'>
                {data.attributes.body.length > 50 ? (
                    <p className='font-bold mb-3 text-xs'>{data.attributes.body.substring(0,200)}<span></span></p>  
                ) : (
                    <p className='font-bold mb-3 text-xs'>{data.attributes.body}</p>  
                )}
            </div>
        </div>
    </div>
  )
}

export default BlogCard

