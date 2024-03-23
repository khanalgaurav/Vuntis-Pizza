import React from 'react'

const Hero = () => {
  return (
    <div className='flex gap-2 items-center h-screen'>
        <div className='text-white w-1/2 text-left'>
            <h1 className='text-8xl'><span className='text-black'>Experience </span>The Richness Of Flavours</h1>
            <p className='text-base mt-5'>Vunti's Pizza brings a fresh take on traditional pizza-making, blending classic techniques with innovative twists to create an unforgettable dining experience</p>
            <button className='bg-white mt-5 animate-bounce font-bold text-black px-7 py-3 rounded-full text-xl'>Sign up and Drive in!</button>
        </div>
        <div className='h-fit shadow-red-950 shadow-2xl rounded-3xl bg-gradient-to-b from-red-500 to-red-950'>
            <img src="images/hero_image.svg" alt="" />
        </div>
    </div>
  )
}

export default Hero