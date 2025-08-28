import React from 'react'
import backgroundImage from '../../assets/bg.jpg'
const Services = () => {

  return (
    <div id='services'>
        <div className="relative w-full bg-blue-500 h-screen flex justify-center items-center">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="z-10 flex items-center flex-col">
            <h2 className='text-6xl font-bold text-white'>Dịch vụ</h2>
            <p className=' text-white'>Chỉ cần bạn đam mê, Mint-on lo hết</p>
          </div>
        </div>
    </div>
  )
}

export default Services