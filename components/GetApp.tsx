import Image from 'next/image'
import React from 'react'

const GetApp = () => {
  return (
    <div className='px-5 lg:px-[110px] mt-[50px]'>
      <div className=' flex items-center overflow-hidden  w-full h-[560px] bg-[#292C27] rounded-[50px]'>
        <div className='px-[80px] flex-1 '>
            <h1 className='text-white bold-40 lg:bold-64 bol max-w-[400px]'>Get for free now!</h1>
            <p className='text-white mt-[50px]'>Available on iOS and Android</p>
            <div className='flex flex-wrap gap-5 mt-[50px] !w-full'>
                <button className=' flex flex-1 items-center justify-center px-8  py-4 bg-white rounded-full'><Image className='mx-2' src='apple.svg' width='24' height='24' alt=''/> App Store</button>
                <button className='flex flex-1 items-center justify-center px-8  py-4 border-white border rounded-full text-white'><Image className='mx-2' src='android.svg' width='24' height='24' alt=''/>play Store</button>
            </div>
        </div>
        <div className='relative flex  justify-end flex-1 lg:w-[550px] h-[850px] lg:ml-[100px] lg:mt-[120px] '>
            <Image className='absolute -top-[50px] w-full h-full object-contain'fill src='/phones.png' alt=""  />
        </div>
      </div>
     
    </div>
  )
}

export default GetApp
