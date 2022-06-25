import Head from 'next/head'
import Image from 'next/image'
import { getSession, SessionProvider } from "next-auth/react"
import { Col, Row, Container } from 'react-bootstrap';

export default function Home() {
  const session = getSession()  
  return (
    <div className='main_wrapper bg-[#1D1E24]'>
        <div className='text-white bg-[#2f3135] main-page-wrapper'>
          <div className='header-img-area border-black min-h-[350px] relative max-h-[350px]'>
            <img src="/wallpaper1.jpg" className='w-full h-full object-cover absolute' />
          </div>
          <div className="bg-[#000] relative">
          <Container className='section_bg absolute z-[1] top-[-100px] min-h-[200px] rounded-lg translate-x-[-50%] left-[50%] transition-all ease-in-out duration-100'>
              <Row className="row p-[20px] align-items-center">
                <Col md={6} className="">
                  <Row>
                    <Col md={12} lg={5} className="relative h-[150px]">
                      <div className='relative border-4 rounded-lg  overflow-hidden border-[#000] min-w-[170px] max-w-[200px] h-[200px] top-[-97px]'>
                        <img src="/picture.jpg" className='w-full h-full absolute object-cover' />
                      </div>
                    </Col>
                    <Col md={12} lg={7} className="">
                      <div className=''>
                        <h4 className="text-[20px] font-bold lg:text-[23px] text-white mb-3">Hussain Alhufufey</h4>
                        <h4 className="text-[#878e99] text-[15px]  font-[500] mb-3 status-info">Instrument Technician</h4>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md={6} className="p-4">
                  <Row className="text-[18px]">
                    <Col lg={6}>
                      <ul className="m-0 p-0">
                        <li className='mb-4'><span className='block text-[14px] text-[#878e99] font-[400]'>Email</span> example@gmail.com</li>
                        <li className='mb-4'><span className='block text-[14px] text-[#878e99] font-[400]'>Phone</span> +880123456789</li>
                      </ul>
                    </Col>
                    <Col lg={6}>
                      <ul className="m-0 p-0">
                        <li className='mb-4'><span className='block text-[14px] text-[#878e99] font-[400]'>Email</span> example@gmail.com</li>
                        <li><span className='block text-[14px] text-[#878e99] font-[400]'>Phone</span> +880123456789</li>
                      </ul>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>



            
            <Container className="absolute top-[900px] z-[-1]">
              <Row className=''>
                <Col md={2}>1</Col>
                <Col md={12}>2</Col>
              </Row>
            </Container>

        </div>
        
    </div>
  )
}


/*
<div className='grid lg:grid-cols-2 border border-[#000]'>
          <div className='border h-[300px] '>
            <div className='relative w-full h-full flex items-center'>
              <center className='w-[100%] z-30 absolute flex justify-center items-center'>
                <h1 className='text-[#fff] mr-2 font-bold text-[15px] md:text-[10px] lg:text-[14px]'>Saline Water Corporation (SWCC)</h1>
                <img src="/swcc.png" className='w-[50px]' />
              </center>
              <div className='absolute w-full h-full opacity-[0.4] bg-[#000] z-20' />
              <img src="/swcc1.jpg" className='object-cover h-full w-full absolute' />
            </div>
          </div>
          
          <div className='h-[300px] flex justify-center items-center'>
            <div className='pt-10 w-[90%] h-[80%]'>
              <h1><span className='font-bold'>Comapny: </span>Saline Water Conversion Corporation</h1>
              <h1><span className='font-bold'>Department: </span>Instrumentation</h1>
              <h1 className='font-bold'>Our Job:</h1>
              <ol className="list-disc ml-9">
                <li>Solving problems that hinder the operation of instruments</li>
                <li>Calibration & testing instruments (Gauges, transmitters)</li>
                <li>Doing regular maintenance work of control valves</li>
              </ol>
            </div>
          </div>
        </div>
*/