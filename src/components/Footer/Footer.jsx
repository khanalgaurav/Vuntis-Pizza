import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='text-white flex flex-col justify-center items-center pt-32 pb-8'>
      <div>
        <img className='' src="/images/logo_vunti.png" alt="" />
      </div>
      <ul className='flex gap-10 mt-2'>
        <li>Home</li>
        <li>About Us</li>
        <li>Scam</li>
      </ul>
      <button className='bg-white text-lg font-bold text-black rounded-full px-10 py-2 mt-2'>Login</button>
      <div className='flex gap-10 md:text-4xl text-3xl my-5'>
        <FaInstagram />
        <FaXTwitter />
        <FaLinkedin />
      </div>
      <hr className='my-5 w-2/3 h-[3px]  bg-red-400'/>
      <p className='mt-5'>&copy; 2024 Copyright - All Rights Reserved</p>
    </div>
  )
}

export default Footer