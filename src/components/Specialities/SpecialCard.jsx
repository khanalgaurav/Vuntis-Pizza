import React, { useState } from 'react'
import pizzaData from '../../assets/pizzas'
const SpecialCard = () => {
    const [count,setCount] = useState(0)
  return (
    <div id='special' className='h-screen flex items-center mb-40'>
        <div className='text-white flex border rounded-full text-center'>
            <div className='flex items-center'>
                <div>
                    <h1 className='text-4xl'>Today's <span className='text-black'>Special</span></h1>
                    <p className='text-7xl mt-2'>{pizzaData[count].name}</p>
                    <p className='mt-10 text-lg'>{pizzaData[count].desc}</p>
                    <div className='flex items-center translate-x-20 gap-10 h-20 w-24 mt-10'>
                        {
                            pizzaData.map((data,i)=>{
                                return <img className='hover:rotate-90 transition duration-700 ease-in-out' onClick={()=>setCount(i)} key={i} src={data.image} alt={data.name} />
                            })
                        }
                    </div>
                </div>    
            </div>
            <div>
                <div className='w-[700px] h-[700px] flex items-center overflow-hidden'>
                    <img className='animate-spin-slow' src={pizzaData[count].image} alt={pizzaData[count].name} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpecialCard