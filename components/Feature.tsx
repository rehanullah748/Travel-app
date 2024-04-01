import Image from 'next/image'
import React from 'react'

const Feature = () => {
  return (
    <div className='relative px-5 lg:px-[110px] mt-[77px] lg:mt-[70px]'>
        <div className='absolute -top-[31px] left-[12px]  md:left-[627px] md:-top-[19px]'>
        <Image src='/camp.svg' width={48} height={40} alt='phone'/>
        </div>
        <h1 className='flex justify-start md:justify-center text-[40px] md:text-[67px] font-bold capitalize'>our Features</h1>
        <div className='flex'>
        <div className='hidden md:block rotate-12 w-11/12 md:mr-5 md:ml-5'>
            <Image src='/phone.png' width={440} height={1000} alt='phone'/>
        </div> 
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[100px]'>
        
        <div className='md:mt-7 mt-7 md:ml-5'>
        <div className='md:w-[80px] w-[60px] h-[60px] md:h-[80px] rounded-full bg-green-600 flex items-center justify-center'>
            <Image  src='/map.svg' width={25} height={25} alt='map'/>
            </div>
            <h1 className='bold-20 lg:bold-32 mt-5 capitalize'>Real Maps Can Be Offline</h1>
            <p className='mt-7 text-gray-500'>We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location</p>
            <div className='md:w-[80px] md:h-[80px] w-[60px] h-[60px] rounded-full bg-green-600 flex items-center justify-center mt-9 md:mt-[80px]'>
            <Image  src='/tech.svg' width={25} height={25} alt='tech'/>
            </div>
            <div>
            <h1 className='bold-20 lg:bold-32 mt-5 capitalize'>Technology Using Augment Reality</h1>
            <p className='mt-7 text-gray-500'>Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection</p>
            </div>
        </div>
        <div className='md:mt-7  -mt-[55px]  md:px-0'>
        <div className='md:w-[80px] md:h-[80px] w-[60px] h-[60px] rounded-full bg-green-600 flex items-center justify-center'>
            <Image  src='/calendar.svg' width={25} height={25} alt='map'/>
            </div>
            <h1 className='bold-20 lg:bold-32 mt-5 capitalize'>Set An Adventure Schedule</h1>
            <p className='mt-7 text-gray-500'>Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion</p>
            <div className='md:w-[80px] md:h-[80px] w-[60px] h-[60px] rounded-full bg-green-600 flex items-center justify-center mt-9 md:mt-[80px]'>
            <Image  src='/tech.svg' width={25} height={25} alt='tech'/>
            
            </div>
            <div>
            <h1 className='bold-20 lg:bold-32 mt-5 capitalize'>Many New Locations Every Month</h1>
            <p className='mt-7 text-gray-500'>Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing</p>
            </div>
        </div>
        </div>
        </div>
        
       
       
    </div>
  )
}

export default Feature