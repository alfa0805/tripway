import React from 'react'

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
        <a href="tel:+998941445597" class="fixed bottom-10 right-6 z-50 group lg:hidden aos-init aos-animate" data-aos="zoom-in"><div class="relative"><div class="absolute inset-0 bg-nemo-orange rounded-full animate-ping opacity-25"></div><div class="absolute inset-0 bg-nemo-orange rounded-full animate-pulse opacity-50"></div><button class="relative bg-[#F26522] text-white p-4 rounded-full shadow-lg transform transition-transform duration-300 group-hover:scale-110"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></button></div></a>
    </div>
  )
}

export default Cell