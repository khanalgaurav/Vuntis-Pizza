import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import LoginSignup from "./pages/LoginSignup"

function App() {

  return (
    <>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/about-us" element={<AboutUs/>}/>
            <Route path="/contact-us" element={<ContactUs/>}/>
            <Route path="/login" element={<LoginSignup/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App
