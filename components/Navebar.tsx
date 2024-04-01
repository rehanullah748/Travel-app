"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineUser } from "react-icons/ai";

const Navebar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className='border-2  py-5 flex justify-between items-center px-5 md:px-[110px] mt-3'>
      <Link className='' href='/' >
        <Image src='/hilink-logo.svg' alt='image' width={78} height={35}/>
        </Link>
        
        <ul className='hidden md:flex gap-x-4'>
        <Link className=' transition-all text-gray-600 hover:font-bold' href='#'><li className='list-none no-underline px-4'>Home</li></Link>
        <Link className=' transition-all text-gray-600 hover:font-bold' href='#'><li className='list-none no-underline px-4'>How it Works?</li></Link>
        <Link className=' transition-all text-gray-600 hover:font-bold' href='#'><li className='list-none no-underline px-4'>Services</li></Link>
        <Link className=' transition-all text-gray-600 hover:font-bold' href='#'><li className='list-none no-underline px-4'>Pricing</li></Link>
        <Link className=' transition-all text-gray-600 hover:font-bold' href='#'><li className='list-none no-underline px-4'>Contact Us</li></Link>
        
        </ul>
        <div className='hidden md:flex items-center gap-x-2 bg-black rounded-full py-4 px-7 '>
            <span className='text-white'><AiOutlineUser /></span>
            <button className='text-white text-md '>
                Login
            </button>
        </div>
        <div className='md:hidden'>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <Image width={25} height={25} alt='image' src='/menu.svg'/>
        </button>
        </div>
     
    </nav>
  )
}

export default Navebar
