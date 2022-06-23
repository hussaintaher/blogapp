import Image from 'next/image'
import styled from 'styled-components'

const BlogCard = ({data}) => {
    console.log('from blogCard: ', data)
    const imgURL = data.attributes.img.data[0].attributes.url
    console.log(imgURL)
  return (
      <div className='w-[90%] mb-10 flex justify-around border'>
        <Card className="rounded w-full overflow-hidden" style={{backgroundColor: '#fff', }}>
            <CardImg 
            className="overflow-hidden rounded mb-3 bg-cover relative w-full min-h-[260px] md:min-h-[200px]" 
            style={{ backgroundImage: `url(${process.env.API_URL}${imgURL})` ,backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}/>

            <CardTitle className='text-left text-[20px]'>
                <p className='text-md font-bold mb-3'>{data.attributes.title}</p>
            </CardTitle>

            <CardBody className='text-left'>
                <p className='font-bold mb-3 text-xs'>{data.attributes.body}</p>          
            </CardBody>
        </Card>
    </div>
  )
}

const OfferBox = styled.div`
    position: absolute;
    padding: 5px 10px;
    left: 0;
    top: 0;
`
const Card = styled.div`
    //max-width: 332px;
    overflow: hidden;
    direction: rtl;
    padding: 15px;
`
const CardImg = styled.div``
const CardTitle = styled.div``
const CardBody = styled.div``

const CardFooter = styled.div`
    cursor: pointer;
    text-decoration: none;
    button {
        background-color: #1c598F;
        border: 2px solid #1c598F;
        color: #fff;
        font-size: 13px;
        text-align: center;
        display: block;
        font-weight: 500;
        padding: 6px;
        width: 100%;
        border-radius: 0.25rem;
    }
    h1 {
        font-size: 13px;
    }
`
export default BlogCard

