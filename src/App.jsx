import React from 'react'
import Header from './companents/Header/Header'
import Footer from './companents/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Tours from './pages/Tours/Tours'
// import 'flowbite'

function App() {
  return (
    <div>
      <Header/>
        <Home/>
        <About/>
        <Tours/>
      <Footer/>
    </div>
  )
}

export default App
