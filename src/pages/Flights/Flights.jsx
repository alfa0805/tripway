import React, { useState } from "react"
import Hostel1 from "../../assets/hostel1.jpg"
import Hostel2 from "../../assets/hostel2.jpg"
import Hostel3 from "../../assets/hostel3.jpg"

import Part1 from "../../assets/part1.jpg"
import Part2 from "../../assets/part2.jpg"
import Part3 from "../../assets/part3.jpg"
import Part4 from "../../assets/part4.jpg"
import Part5 from "../../assets/part5.jpg"

import Marquee from "react-fast-marquee";


function Flights()  {

  return (
    <div className="bg-[#F9FAFB]">
      <div className="max-w-[1240px] mx-auto py-[60px] px-[20px]">
        <h2 className="text-[32px] py-[30px] text-gray-900 font-bold">Aviachiptalar</h2>
        <div className="bg-white p-[30px] shadow-xl rounded-md">
            <div className="flex space-x-4 mb-6">
                <button className="px-4 py-2 rounded-md bg-[#F26522] text-white">Borish</button>
                <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-600">Qaytish</button>
            </div>
            <form action="" className="grid grid-cols-4 gap-[30px] pb-6 max-[1025px]:grid-cols-2 max-[768px]:grid-cols-1">
                <label htmlFor="" className="flex flex-col gap-[5px] text-sm text-gray-700 font-medium">Qayerdan
                    <input type="text" className="w-full p-2 border border-gray-300 rounded-md focus:border focus:border-[#F2652290]" />
                </label>
                <label htmlFor="" className="flex flex-col gap-[5px] text-sm text-gray-700 font-medium">Qayerga
                    <input type="text" className="w-full p-2 border border-gray-300 rounded-md focus:border focus:border-[#F2652290]" />
                </label>
                <label htmlFor="" className="flex flex-col gap-[5px] text-sm text-gray-700 font-medium">Jo'nash sanasi
                    <input type="date" className="w-full p-2 border border-gray-300 rounded-md focus:border focus:border-[#F2652290]" />
                </label>
                <label htmlFor="" className="flex flex-col gap-[5px] text-sm text-gray-700 font-medium">Yo'lovchilar
                    <input type="number" className="w-full p-2 border border-gray-300 rounded-md focus:border focus:border-[#F2652290]" placeholder="1"/>
                </label>
                
            </form>
            <button className="w-full py-[0.8rem] rounded-md bg-[#F26522] text-white">Qidirish</button>
        </div>
      </div>
      {/* Popular */}
        <div className="py-[50px] max-w-[1240px] px-[20px] mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-nemo-dark">Mashxur shaxarlar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <img src={Hostel1} alt="Dubai" className="w-full h-full object-cover transition duration-300 hover:scale-110"/>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-nemo-dark mb-2">Dubai</h3>
                <p className="text-gray-600">Zamonaviy arxitektura va hashamatli savdo markazlari</p>
                <button className="mt-4 w-full bg-[#F26522] text-white px-4 py-2 rounded-full hover:bg-[#E85A1F] transition-colors">Batavfsil malumot</button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <img src={Hostel2} alt="Dubai" className="w-full h-full object-cover transition duration-300 hover:scale-110"/>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-nemo-dark mb-2">Saudiya Arabistoni</h3>
                <p className="text-gray-600">Umra ziyorati uchun maxsus paketlar</p>
                <button className="mt-4 w-full bg-[#F26522] text-white px-4 py-2 rounded-full hover:bg-[#E85A1F] transition-colors">Batavfsil malumot</button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <img src={Hostel3} alt="Dubai" className="w-full h-full object-cover transition duration-300 hover:scale-110"/>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-nemo-dark mb-2">Istanbul</h3>
                <p className="text-gray-600">Tarixiy obidalar va zamonaviy madaniyat</p>
                <button className="mt-4 w-full bg-[#F26522] text-white px-4 py-2 rounded-full hover:bg-[#E85A1F] transition-colors">Batavfsil malumot</button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <img src={Hostel1} alt="Dubai" className="w-full h-full object-cover transition duration-300 hover:scale-110"/>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-nemo-dark mb-2">Antalya</h3>
                <p className="text-gray-600">Dam olish va sohil bo'yi kurortlari</p>
                <button className="mt-4 w-full bg-[#F26522] text-white px-4 py-2 rounded-full hover:bg-[#E85A1F] transition-colors">Batavfsil malumot</button>
              </div>
            </div>
          </div>
        </div>
      {/* partnior */}
      <div className=" mx-auto py-[40px] max-h-[280px] bg-[#FFFFFF] shadow-2xl shadow-black">
          <h2 className="text-[32px] text-black text-center font-bold pb-[25px]">Hamkorlarimiz</h2>
          <Marquee >
          <div className="flex items-center justify-between">
            <div className="w-[180px] mr-[70px]">
              <div className="w-[180px] h-[90px] bg-amber-300 rounded-[8px] shadow-[0px_3px_10px_#20202060]">
                <img src={Part1} alt="rasm" className="w-full h-full object-cover rounded-[8px]"/>
              </div>
              <p className="text-gray-800 text-center text-[16px] pt-[7px]">Centrum Air</p>
            </div>
            <div className="w-[180px] mr-[70px]">
              <div className="w-[180px] h-[90px] bg-amber-300 rounded-[8px] shadow-[0px_3px_10px_#20202060]">
                <img src={Part2} alt="rasm" className="w-full h-full object-cover rounded-[8px]"/>
              </div>
              <p className="text-gray-800 text-center text-[16px] pt-[7px]">Emirates </p>
            </div>
            <div className="w-[180px] mr-[70px]">
              <div className="w-[180px] h-[90px] bg-amber-300 rounded-[8px] shadow-[0px_3px_10px_#20202060]">
                <img src={Part3} alt="rasm" className="w-full h-full object-cover rounded-[8px]"/>
              </div>
              <p className="text-gray-800 text-center text-[16px] pt-[7px]">Qatar Airways</p>
            </div>
            <div className="w-[180px] mr-[70px]">
              <div className="w-[180px] h-[90px] bg-amber-300 rounded-[8px] shadow-[0px_3px_10px_#20202060]">
                <img src={Part4} alt="rasm" className="w-full h-full object-cover rounded-[8px]"/>
              </div>
              <p className="text-gray-800 text-center text-[16px] pt-[7px]">Turkish Airlines</p>
            </div>
            <div className="w-[180px] mr-[70px]">
              <div className="w-[180px] h-[90px] bg-amber-300 rounded-[8px] shadow-[0px_3px_10px_#20202060]">
                <img src={Part5} alt="rasm" className="w-full h-full object-cover rounded-[8px]"/>
              </div>
              <p className="text-gray-800 text-center text-[16px] pt-[7px]">Uzairways</p>
            </div>
          </div>
          </Marquee>
      </div>
      

    </div>
  )
}

export default Flights