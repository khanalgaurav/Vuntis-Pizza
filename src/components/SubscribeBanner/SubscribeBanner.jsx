import React from 'react'

const SubscribeBanner = () => {
  return (
    <div className="my-10 md:flex justify-center h-fit md:w-full w-screen mb-10 bg-red-700 text-white rounded-3xl">
        <div className='h-fit w-fit md:w-full rounded-xl py-20 text-center flex flex-col items-center justify-center'>
            <h1 className='md:text-5xl text-4xl'>Get Delicious Offers In Your Email</h1>
            <p className='text-xl mb-5 text-black'>Subscribe To Us and Stay Connected</p>
            <form action="" className='border border-black rounded-3xl w-fit '>
                <input className='md:w-80 w-60 text-sm bg-transparent outline-none px-4' type="email" placeholder='Your Email Id' />
                <button className='rounded-3xl px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black'>Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default SubscribeBanner