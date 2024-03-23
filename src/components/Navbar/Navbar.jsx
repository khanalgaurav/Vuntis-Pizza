import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-around py-1'>
        <NavLink to='/'><div className='h-24 w-32 overflow-hidden'>
            <img src="images/logo_vunti.png" alt="" />
        </div></NavLink>
        <div className='rounded-full bg-red-600 px-10 py-3 shadow-[#494540] shadow-md'>
            <ul className='text-white text-xl flex gap-20'>
                <NavLink to='/'><li>Home</li></NavLink>
                <a href="#special"><li>Specialities</li></a>
                <NavLink to='/about-us'><li>About Us</li></NavLink>
                <NavLink to='/contact-us'><li>Contact us</li></NavLink>
            </ul>
        </div>
        <NavLink to='/login'><button className='bg-white text-lg font-bold rounded-full px-10 py-2'>Login</button></NavLink>
    </div>
  )
}

export default Navbar