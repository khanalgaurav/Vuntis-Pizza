import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-around py-1'>
        <div className='h-24 w-32 overflow-hidden'>
            <img src="images/logo_vunti.png" alt="" />
        </div>
        <div className='rounded-full bg-red-600 px-10 py-3 shadow-[#494540] shadow-md'>
            <ul className='text-white text-xl flex gap-20'>
                <li>Home</li>
                <li><a href="#special">Specialities</a></li>
                <li>About Us</li>
                <li>Contact us</li>
            </ul>
        </div>
        <button className='bg-white text-lg font-bold rounded-full px-10 py-2'>Login</button>
    </div>
  )
}

export default Navbar