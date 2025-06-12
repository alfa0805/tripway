import React, { useEffect, useState } from 'react'
import Header from './companents/Header/Header'
import Footer from './companents/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Tours from './pages/Tours/Tours'
import Hotels from './pages/mexmonhonalar/Hotels'
import Flights from './pages/Flights/Flights'
import Contact from './pages/Contact/Contact'

// import AOS from 'aos';
import 'aos/dist/aos.css';
import { BlinkBlur } from 'react-loading-indicators'
import AOS from 'aos'


// import 'flowbite'

function App() {

    const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 500,
      offset:0,
      once: false,
      easing: 'ease-in-out',
      delay: 100,
      mirror:true, 
    });

    // Loading ni 2 sekundda yo‘q qilish
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen bg-[#1b39e5] flex justify-center items-center text-center">
        <BlinkBlur color="#f5f5f5" size="large" text="" textColor="" />
      </div>
    );
  }

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
