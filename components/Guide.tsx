import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <div className='mt-[320px] lg:mt-[240px]  lg:px-[110px]'>
      <div className='relative  lg:flex lg:justify-between'>
        <div className='absolute px-5 top-[-47px] left-[-2px]'>
        <Image src='/camp.svg' alt='' width={50} height={50}/>
        </div>
    <div className='px-5'>
        <h3 className=' text-green-600'>WE ARE HERE FOR YOU</h3>
        <h1 className='hidden lg:flex mt-5 text-[50px] lg:text-[70px] font-bold leading-[75px] '>Guide You <br /> to Easy Path</h1>
        <h1 className='mt-5 text-[40px] lg:text-[70px] font-bold leading-[75px] lg:hidden '>Guide You  to Easy Path</h1>
    </div>
    <div className='w-full px-5 lg:w-4/12'>
        <p>Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain</p>
    </div>
      </div>
      <div className='relative mt-[90px] !rounded-3xl'>
        <div className='gap-x-4 flex absolute lg:mt-0 mt-2  w-[280px] h-[94%] lg:h-[225px] rounded-xl bg-white shadow-md left-[25%] lg:left-[72px] lg:top-[80px]'>
        <Image alt="meter" width="14" height="158" decoding="async" data-nimg="1" className="mt-4 ml-6 w-[26px]"  src="/meter.svg"/>
        <div className=' mt-8 '>
          <span className='text-gray-400'>Destination</span>
          <span className=' ml-4 text-[17px] font-semibold text-green-600'>48 min</span>
          <h1 className='text-xl font-bold mt-2'>Aguas Calientes</h1>
          <div className='mt-[45px]'>
            <h3 className="text-gray-400">Start track</h3>
            <h1 className='text-xl font-bold mt-2'>Wonorejo Pasuruan</h1>
          </div>
        </div>
        
        </div>
        <div >
        <Image className=' lg:rounded-[40px]' src='/boat.png' alt="" width={1500} height={180}/>
        </div>
       
      </div>
    </div>
  )
}

export default Guide
