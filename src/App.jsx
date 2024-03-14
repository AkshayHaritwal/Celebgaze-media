import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Ourproducts from './Components/Ourproducts/Ourproducts'
import WhyUs from './Components/WhyUs/WhyUs'
import Reviews from './Components/Reviews/Reviews'
import Query from './Components/Query/Query'
import Contact from './Components/Contact/Contact'
import Connect from './Components/Connect/Connect'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
        <Home/>
        <About/>
        <Ourproducts/>
        <WhyUs/>
        <Reviews/>
        <Query/>
        <Contact/>
        <Connect/>
        <Footer/>
      
    </div>
  )
}

export default App
