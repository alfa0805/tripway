import React from 'react'
import { FiPhoneCall } from "react-icons/fi";

import 'aos/dist/aos.css'; 
import AOS from 'aos'
import { useEffect } from 'react';

function Cell() {

     useEffect(() => {
                AOS.init({
                  duration: 1000,
                  once: false, 
                });
            }, []);

  return (
    <div>
        <a href="tel:+998941445597" className="fixed bottom-10 right-6 z-50 group lg:hidden aos-init aos-animate" data-aos="zoom-in"><div className="relative"><div className="absolute inset-0 bg-nemo-orange rounded-full animate-ping opacity-25"></div><div className="absolute inset-0 bg-nemo-orange rounded-full animate-pulse opacity-50"></div><button className="relative bg-[#F26522] text-white p-4 rounded-full shadow-lg transform transition-transform duration-300 group-hover:scale-110">
        <FiPhoneCall className="text-[25px]" />
        </button></div></a>
    </div>
  )
}

export default Cell