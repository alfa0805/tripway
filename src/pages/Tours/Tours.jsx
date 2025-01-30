import React from "react";
import turlar1 from "../../assets/turlar1.jpg";
import turlar2 from "../../assets/turlar2.jpg";
import turlar3 from "../../assets/turlar3.jpg";
import turlar4 from "../../assets/turlar4.jpg";

function Tours() {
  return (
    <div className="pb-50 mt-5">
      <div className="container px-4">
        <h2 className="font-bold text-5xl text-center">Turlar</h2>
        <p className="text-center text-gray-600 pt-5">
          Eng yaxshi sayohat turlari
        </p>

        <ul className="flex  justify-center mt-5 flex-wrap gap-5">
          <li className="w-[280px] hover:shadow-2xl rounded-2xl shadow-xl ">
            <img src={turlar1} alt="" className="w-[100%] h-[50%] object-cover rounded-tr-2xl rounded-tl-2xl" />
            <div className="m-5">
              <h2 className="font-[700] text-2xl pb-2">O'zbekiston bo'ylab sayohat</h2>
              <p className=" text-gray-800 mb-3">
                O'zbekistonning tarixiy va madaniy shaharlari bo'ylab safar
              </p>
              <a href="#" className="bg-amber-600 text-white px-5 rounded-2xl py-1.5">Batafsil</a>
            </div>
          </li>
          <li className="w-[280px] hover:shadow-2xl rounded-tr-2xl rounded-xl shadow-xl rounded-tl-2xl">
            <img src={turlar2} alt="" className="w-[100%] h-[50%] object-cover rounded-tr-2xl rounded-tl-2xl" />
            <div className="m-5">
              <h2 className="font-[700] text-2xl pb-2">O'zbekiston bo'ylab sayohat</h2>
              <p className=" text-gray-800 mb-3">
                O'zbekistonning tarixiy va madaniy shaharlari bo'ylab safar
              </p>
              <a href="#" className="bg-amber-600 text-white px-5 rounded-2xl py-1.5">Batafsil</a>
            </div>
          </li>
          <li className="w-[280px] hover:shadow-2xl shadow-xl rounded-xl rounded-tr-2xl rounded-tl-2xl">
            <img src={turlar3} alt="" className="w-[100%] h-[50%] object-cover rounded-tr-2xl rounded-tl-2xl" />
            <div className="m-5">
              <h2 className="font-[700] text-2xl pb-2">O'zbekiston bo'ylab sayohat</h2>
              <p className=" text-gray-800 mb-3">
                O'zbekistonning tarixiy va madaniy shaharlari bo'ylab safar
              </p>
              <a href="#" className="bg-amber-600 text-white px-5 rounded-2xl py-1.5">Batafsil</a>
            </div>
          </li>
          <li className="w-[280px] hover:shadow-2xl shadow-xl rounded-xl rounded-tr-2xl rounded-tl-2xl">
            <img src={turlar4} alt="" className="w-[100%] h-[50%] object-cover rounded-tr-2xl rounded-tl-2xl" />
            <div className="m-5">
              <h2 className="font-[700] text-2xl pb-2">O'zbekiston bo'ylab sayohat</h2>
              <p className=" text-gray-800 mb-3">
                O'zbekistonning tarixiy va madaniy shaharlari bo'ylab safar
              </p>
              <a href="#" className="bg-amber-600 text-white px-5 rounded-2xl py-1.5">Batafsil</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default  Tours;
