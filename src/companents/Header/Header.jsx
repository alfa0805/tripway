import React, { useState } from "react"
import Logo from "../../assets/logo.png"
import { HiMenu } from "react-icons/hi";

function Header() {
const [modal, setModal] = useState(false)
const menyu = () => {
  setModal(!modal)
}

  return (
    <header className="bg-[#F26522]">
      <nav className="max-w-[1240px] h-[70px] mx-auto flex justify-between items-center px-[20px]">
        <div className="w-[120px] h-[40px]">
          <img src={Logo} alt="" className="w-[100%] h-[100%]" />
        </div>
        <ul className="w-[50%] flex justify-between items-center gap-[10px] max-[1000px]:w-[70%] max-[768px]:hidden">
          <li className=" text-gray-100 text-[14px] font-semibold"><a href="">Asosiy</a></li>
          <li className=" text-gray-100 text-[14px] font-semibold"><a href="">Biz haqimizda</a></li>
          <li className=" text-gray-100 text-[14px] font-semibold"><a href="">Turlar</a></li>
          <li className=" text-gray-100 text-[14px] font-semibold"><a href="">Mehmonxonalar</a></li>
          <li className=" text-gray-100 text-[14px] font-semibold"><a href="">Aviachiptalar</a></li>
          <li className=" text-gray-100 text-[14px] font-semibold"><a href="">Aloqa</a></li>
        </ul>
        <div className="flex items-center justify-center gap-2">
          <select className="w-[60px] text-gray-100 font-bold p-[10px] ">
            <option className="text-gray-100 text-[16px] font-bold bg-amber-600" value="uz">UZ</option>
            <option className="text-gray-100 text-[16px] font-bold bg-amber-600" value="ru">RU</option>
            <option className="text-gray-100 text-[16px] font-bold bg-amber-600" value="en">EN</option>
          </select>
          <button onClick={menyu} className="text-gray-100 text-[25px] font-bold md:hidden"><HiMenu /></button>
        </div>
      </nav>
      {
        modal ?  
      <ul className="w-[100%] flex justify-between items-center gap-[10px] flex-col py-[10px]">
        <li className=" text-gray-100 text-[14px] font-semibold hover:bg-amber-600 w-[100%] text-center"><a href="">Asosiy</a></li>
        <li className=" text-gray-100 text-[14px] font-semibold hover:bg-amber-600 w-[100%] text-center"><a href="">Biz haqimizda</a></li>
        <li className=" text-gray-100 text-[14px] font-semibold hover:bg-amber-600 w-[100%] text-center"><a href="">Turlar</a></li>
        <li className=" text-gray-100 text-[14px] font-semibold hover:bg-amber-600 w-[100%] text-center"><a href="">Mehmonxonalar</a></li>
        <li className=" text-gray-100 text-[14px] font-semibold hover:bg-amber-600 w-[100%] text-center"><a href="">Aviachiptalar</a></li>
        <li className=" text-gray-100 text-[14px] font-semibold hover:bg-amber-600 w-[100%] text-center"><a href="">Aloqa</a></li>
      </ul>: ""
      }
     
    </header> 
  )
}

export default Header