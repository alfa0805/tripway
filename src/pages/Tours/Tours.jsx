import React from "react";
import turlar1 from "../../assets/turlar1.jpg";
import turlar2 from "../../assets/turlar2.jpg";
import turlar3 from "../../assets/turlar3.jpg";
import turlar4 from "../../assets/turlar4.jpg";

function Tours() {
  return (
    <div className="pb-50 mt-5">
      <div className="max-w-[1240px] px-4 mx-auto">
        <h2 className="font-bold text-[36px] text-center">Turlar</h2>
        <p className="text-center text-gray-600 pt-5">
          Eng yaxshi sayohat turlari
        </p>

        <ul className="flex  justify-center mt-5 flex-wrap gap-5">
          <li className="w-[280px] rounded-2xl shadow-xl hover:shadow-[0px_3px_10px_3px_#F2652260] hover:transition-all duration-500">
            <img src={turlar1} alt="" className="w-[100%] h-[50%] object-cover rounded-tr-2xl rounded-tl-2xl" />
            <div className="m-5">
              <h2 className="font-[700] text-[20px] pb-2">O'zbekiston bo'ylab sayohat</h2>
              <p className=" text-gray-800 mb-3 text-md">
                O'zbekistonning tarixiy va madaniy shaharlari bo'ylab safar
              </p>
              <a href="#" className="bg-[#F26522] text-white px-5 rounded-2xl py-1.5">Batafsil</a>
            </div>
          </li>
          <li className="w-[280px] rounded-tr-2xl rounded-xl shadow-xl rounded-tl-2xl hover:shadow-[0px_3px_10px_3px_#F2652260] hover:transition-all duration-500">
            <img src={turlar2} alt="" className="w-[100%] h-[50%] object-cover rounded-tr-2xl rounded-tl-2xl" />
            <div className="m-5">
              <h2 className="font-[700] text-[20px] pb-2">Turkiya bo'ylab sayohat</h2>
              <p className=" text-gray-800 mb-3 text-md">
                Istanbul, Antalya, Kappadokiya - eng mashhur joylar
              </p>
              <a href="#" className="bg-[#F26522] text-white px-5 rounded-2xl py-1.5">Batafsil</a>
            </div>
          </li>
          <li className="w-[280px]  shadow-xl rounded-xl rounded-tr-2xl rounded-tl-2xl hover:shadow-[0px_3px_10px_3px_#F2652260] hover:transition-all duration-500">
            <img src={turlar3} alt="" className="w-[100%] h-[50%] object-cover rounded-tr-2xl rounded-tl-2xl" />
            <div className="m-5">
              <h2 className="font-[700] text-[20px] pb-2">Dubai</h2>
              <p className=" text-gray-800 mb-3 text-md">
                Zamonaviy arxitektura va hashamatli savdo markazlari
              </p>
              <a href="#" className="bg-[#F26522] text-white px-5 rounded-2xl py-1.5">Batafsil</a>
            </div>
          </li>
          <li className="w-[280px] shadow-xl rounded-xl rounded-tr-2xl rounded-tl-2xl hover:shadow-[0px_3px_10px_3px_#F2652260] hover:transition-all duration-500">
            <img src={turlar4} alt="" className="w-[100%] h-[50%] object-cover rounded-tr-2xl rounded-tl-2xl" />
            <div className="m-5">
              <h2 className="font-[700] text-[20px] pb-2">Yevropa bo'ylab sayohat</h2>
              <p className=" text-gray-800 mb-3 text-md">
                Fransiya, Italiya, Germaniya, Ispaniya - eng go'zal shaharlar
              </p>
              <a href="#" className="bg-[#F26522] text-white px-5 rounded-2xl py-1.5">Batafsil</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default  Tours;
