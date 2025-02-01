import React from 'react'
import Hostel1 from "../../assets/hostel1.jpg"
import Hostel2 from "../../assets/hostel2.jpg"
import Hostel3 from "../../assets/hostel3.jpg"


function Hotels() {
  return (
    <>
        <div className="py-[70px] max-w-[1240px] mx-auto px-[20px]">
            <h2 className="py-[30px] font-bold text-[38px] text-center">Mehmonxonalar</h2>
            <div className="flex items-center justify-center gap-[20px] flex-wrap">
                <div className="w-[380px] h-[400px] shadow-xl rounded-[10px] hover:shadow-[0px_3px_10px_3px_#F2652260] hover:transition-all duration-500">
                    <div className="w-[100%] h-[190px] rounded-t-xl">
                        <img src={Hostel1} alt="" className="w-full h-full object-cover rounded-t-[10px]" />
                    </div>
                    <div className="p-[20px] flex items-start justify-start flex-col gap-[10px]">
                        <h2 className="text-gray-950 text-[20px] font-medium">Hyatt Regency Tashkent</h2>
                        <p className="text-gray-700 text-[16px]">Navoi ko'chasi 1-uy, Toshkent</p>
                        <p className="text-gray-700 text-[16px]">Zamonaviy mehmonxona markaz markazida</p>
                        <button className="w-[170px] h-[40px] text-gray-100 bg-[#F26522] rounded-[20px]">Batafsil malumot</button>
                    </div>
                </div>
                <div className="w-[380px] h-[400px] shadow-xl rounded-[10px] hover:shadow-[0px_3px_10px_3px_#F2652260] hover:transition-all duration-500">
                    <div className="w-[100%] h-[190px] rounded-t-xl">
                        <img src={Hostel2} alt="" className="w-full h-full object-cover rounded-t-[10px]" />
                    </div>
                    <div className="p-[20px] flex items-start justify-start flex-col gap-[10px]">
                        <h2 className="text-gray-950 text-[20px] font-medium">Hilton Tashkent City</h2>
                        <p className="text-gray-700 text-[16px]">Islom Karimov ko'chasi 2-uy, Toshkent</p>
                        <p className="text-gray-700 text-[16px]">Biznes mehmonxona shahar markazida</p>
                        <button className="w-[170px] h-[40px] text-gray-100 bg-[#F26522] rounded-[20px]">Batafsil malumot</button>
                    </div>
                </div>
                <div className="w-[380px] h-[400px] shadow-xl rounded-[10px] hover:shadow-[0px_3px_10px_3px_#F2652260] hover:transition-all duration-500">
                    <div className="w-[100%] h-[190px] rounded-t-xl">
                        <img src={Hostel3} alt="" className="w-full h-full object-cover rounded-t-[10px]" />
                    </div>
                    <div className="p-[20px] flex items-start justify-start flex-col gap-[10px]">
                        <h2 className="text-gray-950 text-[20px] font-medium">City Palace Hotel</h2>
                        <p className="text-gray-700 text-[16px]">Amir Temur ko'chasi 15-uy, Toshkent</p>
                        <p className="text-gray-700 text-[16px]">Qulay mehmonxona diqqatga sazovor joylar yaqinida</p>
                        <button className="w-[170px] h-[40px] text-gray-100 bg-[#F26522] rounded-[20px]">Batafsil malumot</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hotels