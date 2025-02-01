import React from 'react'
import Header from './companents/Header/Header'
import Footer from './companents/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Tours from './pages/Tours/Tours'
import Hotels from './pages/mexmonhonalar/Hotels'
import Flights from './pages/Flights/Flights'
import Contact from './pages/Contact/Contact'




// import 'flowbite'

function App() {
  return (
    <div>
      <Header/>
        <Home/>
        <About/>
        <Tours/>
        <Hotels/>
        <Flights/>
        <Contact/>
      <Footer/>
    </div>
  )
}

export default App
