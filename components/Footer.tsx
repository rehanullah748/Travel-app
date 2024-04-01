"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='px-5 lg:px-[115px] mt-[70px]'>
   
   <div className='block lg:hidden mb-8'>
        <Image src='hilink-logo.svg' alt='logo' width={80} height={80}/>
      </div>
      <div className='grid grid-cols-3 lg:grid-cols-5 gap-x-4'>
      <div className='hidden lg:block'>
        <Image src='hilink-logo.svg' alt='logo' width={80} height={80}/>
      </div>
      
      <div className=''>
        <h1 className='text-xl font-bold py-3'>Learn more</h1>
        <ul className="regular-14 flex flex-col gap-4 text-gray-30 py-4"><Link href="/">About Hilink</Link><Link href="/">Press Releases</Link><Link href="/">Environment</Link><Link href="/">Jobs</Link><Link href="/">Privacy Policy</Link><Link href="/">Contact Us</Link></ul>
      </div>
      <div>
        <h1  className='text-xl font-bold py-3'>Our Community</h1>
        <ul className="regular-14 flex flex-col gap-4 text-gray-30 py-4">
          <Link href="/">Climbing xixixi</Link>
          <Link href="/">Hiking hilink</Link>
          <Link href="/">Hilink kinthill</Link>
          </ul>
      </div>
      <div>
      <h1  className='text-xl font-bold py-3'>Contact Us</h1>
        <ul className="regular-14 flex flex-col gap-4 text-gray-30 py-4">
          <Link href="/">Admin Officer:</Link>
          <Link href="/">123-456-7890</Link>
          <Link href="/">Email Officer:</Link>
          <Link href="/">hilink@akinthil.com</Link>
         
          </ul>


      </div>
      <div>
        <h1 className=' text-xl font-bold py-3'>Social</h1>
        <ul className='flex items-center justify-start gap-x-5'>
        <Link href={'/'}><Image src='/facebook.svg' alt='social-media' width={25} height={30}/></Link>
        <Link href={'/'}><Image src='/instagram.svg' alt='social-media' width={25} height={30}/></Link>
        <Link href={'/'}><Image src='/twitter.svg' alt='social-media' width={25} height={30}/></Link>
        <Link href={'/'}><Image src='youtube.svg' alt='social-media' width={25} height={30}/></Link>
        <Link href={'/'}><Image src='wordpress.svg' alt='social-media' width={25} height={30}/></Link>
        </ul>
    
       
      </div>
      </div>
      
   
    </div>
  )
}

export default Footer