"use client"

import Image from 'next/image';
import React from 'react'
import { FaMap } from "react-icons/fa";
const Camp = () => {
  const [state] = React.useState([
    {
      id:1,
      image: "/person-1.png"
    },
    {
      id:2,
      image: "/person-2.png"
    },
    {
      id:3,
      image: "/person-3.png"
    },
    {
      id:4,
      image: "/person-4.png"
    },
  ])
  return (
    <div className='px-0 lg:px-[110px]'>
<div className='flex gap-6 relative'>
<div className='absolute  right-0 lg:right-[40px] w-full lg:w-[735px] -bottom-[70%]  lg:-bottom-[80px] z-[99999999999999] px-5 lg:px-0'>
  <div className=' bg-green-600 rounded-[40px] p-10 lg:p-[80px]'>
  <h1 className='regular-24 md:regular-32 2xl:regular-64 capitalize text-white'><strong>Feeling Lost</strong> And Not Knowing The Way?</h1>
  <p className='regular-14 xl:regular-16 mt-5 text-white'>Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure</p>
  </div>
  
</div>
        <div className='lg:rounded-[40px] w-full lg:w-9/12 bg-[url("/img-1.png")] h-[350px] lg:h-[600px] bg-cover relative'>
        <div className='absolute inset-0 w-full h-full text-white py-8 px-[64px]'>
          <div className='flex flex-col h-full justify-between '>
          <div className='flex gap-4'>
          <div className='bg-green-400  flex items-center justify-center rounded-full  w-[60px] h-[60px]'>
          <FaMap size={25} />
          </div>
          <div className=''>
            <h1 className='font-bold text-lg capitalize '>putuk trunu camp</h1>
            <p>Prigen, Pasuruan</p>
          </div>
        </div>
        <div className='flex items-center gap-5'>
        <div  className='flex'>
          {state.map((pic) => {
            return (
              <Image className='-ml-4 first:ml-0' src={pic.image} key={pic.id} width={40} height={40} alt=''/>
            )
          })}
        </div>
        <div>
          <h1 className='bold-16 md:bold-20 capitalize text-white'>50+ joined</h1>
        </div>
        </div>
          </div>
        
        </div>
        </div>
        {/* seconed image */}
        <div className=' hidden rounded-tl-[40px] rounded-bl-[40px] lg:w-3/12 lg:flex  bg-[url("/img-2.png")] h-[600px] bg-cover relative'>
        <div className='absolute inset-0 w-full h-full text-white py-8 px-[64px]'>
        <div className='flex gap-4'>
          <div className='bg-green-400  flex items-center justify-center rounded-full  w-[60px] h-[60px]'>
          <FaMap size={25} />
          </div>
          <div className=''>
            <h1 className='font-bold text-lg capitalize '>putuk trunu camp</h1>
            <p>Prigen, Pasuruan</p>
          </div>
        </div>
        </div>
        <div className='flex items-center gap-5'>
        <div  className='flex'>
          {state.map((pic) => {
            return (
              <Image className='-ml-4 first:ml-0' src={pic.image} key={pic.id} width={40} height={40} alt=''/>
            )
          })}
        </div>
        <div>
          <h1 className='bold-16 md:bold-20 capitalize text-white'>50+ joined</h1>
        </div>
        </div>
        </div>
       
    </div>
  
    </div>
  )
}

export default Camp