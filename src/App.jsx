import SubscribeBanner from "./components/SubscribeBanner/SubscribeBanner"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import SpecialCard from "./components/Specialities/SpecialCard"

function App() {

  return (
    <>
        <Navbar/>
      <div className="mx-20">
        <Hero/>
        <SpecialCard/>
        <SubscribeBanner/>
      </div>
        <Footer/>
    </>
  )
}

export default App
