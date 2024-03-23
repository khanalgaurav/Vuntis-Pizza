import React from 'react'
import Hero from '../components/Hero/Hero'
import SpecialCard from '../components/Specialities/SpecialCard'
import SubscribeBanner from '../components/SubscribeBanner/SubscribeBanner'

const Home = () => {
  return (
    <div className="mx-20">
        <Hero/>
        <SpecialCard/>
        <SubscribeBanner/>
      </div>
  )
}

export default Home