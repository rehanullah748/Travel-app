import Image from 'next/image'
import React from 'react'
import { LiaStarSolid } from "react-icons/lia";

const Hero = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2  px-6 md:px-[110px]  gap-20  py-10 lg:py-20 '> 
      {/* <div className='border-2 absolute top-0 right-0 h-screen w-[50%]'>
      <Image alt='image' src='/pattern-bg.png' width={1000} height={1000}/>
       
      </div> */}
      <div className=' relative '>
    <Image
      width={47}
      height={47}
      src='/camp.svg'
      alt='image'
      className='absolute top-[-28px] left-[-4px] md:top-[-12px]'
     />
     <h1 className=' bold-52 lg:bold-88 font-Poppins'>putuk truno camp area</h1>
     <p className='mt-7 '>We want to be on each of your journeys seeking the satisfaction of <br /> seeing the incorruptible beauty of nature. We can help you on an <br />adventure around the world in just one app</p>
    <div className='flex gap-x-5 mt-10'>
    <div className='flex gap-x-2'>
        <span className='text-[#eab308] '><LiaStarSolid size={24} /> </span>
        <span className='text-[#eab308] '><LiaStarSolid size={24} /> </span>
        <span className='text-[#eab308] '><LiaStarSolid size={24} /> </span>
        <span className='text-[#eab308] '><LiaStarSolid size={24} /> </span>
        <span className='text-[#eab308] '><LiaStarSolid size={24} /> </span>
      </div>
      <div className='flex gap-x-2'>
        <h1 className='text-xl font-bold'>198k</h1>
        <h1 className='text-xl font-normal'>Excellent Reviews</h1>
      </div>
    </div>
    <div className='md:flex items-center  gap-x-7 mt-10 '>
    <button className='py-5 px-[220px] md:px-8 bg-green-600 text-white capitalize rounded-full'>download app</button>
    <span className='flex mt-6 md:mt-0  items-center  gap-x-2 '>
      <Image src='play.svg' width={26} height={24} alt='img'/>
      <p className='text-base font-bold '>How we work?</p>
      </span>
    </div>
    
      </div>
       {/* colum-2 */}
       <div className='bg-[url("/map.svg")] bg-cover'>
      
       <div className='w-[270px] h-[200px] bg-[#292c27] text-white rounded-3xl  '>
        <div className='pl-8 pt-7 '>
          <h3 className='text-base text-gray-400 font-medium '>location</h3>
          <h1 className='text-xl font-semibold'>Aguas Calientes</h1>
        </div>
       
        <div className='flex justify-evenly items-center mt-7'>
        <div>
        <h3 className='text-base text-gray-400 font-medium '>Distance</h3>
          <h1 className='text-xl font-semibold'>173.28 mi</h1>  
        </div>
        <div>
        <h3 className='text-base text-gray-400 font-medium '>Elevation</h3>
          <h1 className='text-xl font-semibold'>2024 Km</h1>
        </div>
        </div>
      </div>
     
       </div>
       
    </section>
   
  )
}

export default Hero
