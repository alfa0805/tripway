import React from 'react'
import { FaInstagram, FaTelegram } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'
import Logo from "../../assets/logo.png"

// import 'aos/dist/aos.css'; 
// import AOS from 'aos'
// import { useEffect } from 'react';

function Footer() {

    //  useEffect(() => {
    //               AOS.init({
    //                 duration: 1000,
    //                 once: false, 
    //               });
    //           }, []);

  return (
    <div className="">
      <footer className="bg-gray-900 text-white aos-init aos-animate" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <img className="w-28" src={Logo} alt="logo"/>
              </div>
                <p className="text-gray-400">Toshkent shahri, Muqimiy ko'chasi 44-A uy</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Bog'lanish</h3>
              <div className="space-y-2">
                <p className="text-gray-400">Tel: +998 95 150 00 00</p>
                <p className="text-gray-400">info@nemoavia.uz </p>
              </div>
            </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Ijtimoiy tarmoqlar</h3>
            <div className="flex items-center gap-[30px]">
              <a href="https://t.me/Asadbek_0805" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaTelegram className="text-[25px]" />
              </a>
              <a href="https://instagram.com/alfa__0805" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaInstagram  className="text-[25px]"/>
              </a>
              <a href="#" className=" text-gray-400 hover:text-white transition-colors">
              <MdOutlineMail className="text-[25px]" />
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Manzil</h3>
            <p className="text-gray-400">Toshkent shahri, Muqimiy ko'chasi 44-A uy</p>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">2025 Nemo Avia Trip. Barcha huquqlar himoyalangan.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer