import React from 'react'

function Contact() {
  return (
    <div className="bg-[#F9FAFB]">
       <div className="max-w-[1240px] mx-auto px-[20px] py-[50px]">
        <h2 className="text-gray-900 text-[32px] text-center font-bold">Biz bilan bog'lanish</h2>
        <p className="text-gray-600 text-[18px] text-center font-normal">Savollaringiz bormi? Biz sizga yordam berishdan xursandmiz</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-[40px]">
            <form action="" className="bg-[#FFFFFF] p-6 rounded-md shadow-[0px_3px_15px_#00000025]">
              <label className="flex flex-col gap-[5px] pb-[20px] text-[16px] text-gray-700 font-normal">Ismingiz
                <input type="text" className="w-full p-2 border border-gray-300 rounded-md focus:border focus:border-[#F2652290]"/>
              </label>
              <label className="flex flex-col gap-[5px] pb-[20px] text-[16px] text-gray-700 font-normal">Email manzilingiz
                <input type="email" className="w-full p-2 border border-gray-300 rounded-md focus:border focus:border-[#F2652290]"/>
              </label>
              <label className="flex flex-col gap-[5px] pb-[20px] text-[16px] text-gray-700 font-normal">Telefon raqamingiz
                <input type="tel" className="w-full p-2 border border-gray-300 rounded-md focus:border focus:border-[#F2652290]"/>
              </label>
              <label className="flex flex-col gap-[5px] pb-[20px] text-[16px] text-gray-700 font-normal">Mavzu
                <input type="text" className="w-full p-2 border border-gray-300 rounded-md focus:border focus:border-[#F2652290]"/>
              </label>
              <label className="flex flex-col gap-[5px] pb-[40px] text-[16px] text-gray-700 font-normal">Xabaringiz
                <textarea className="w-full h-[120px] p-2 border border-gray-300 rounded-md focus:border focus:border-[#F2652290]"/>
              </label>
              <button className="bg-[#000000dd] text-white text-[17px] font-normal w-full rounded-md py-[8px] border-2 border-gray-950 hover:bg-white hover:text-gray-950 hover:font-medium">Yuborish</button>
            </form>
            <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-nemo-dark mb-4">Aloqa ma'lumotlari</h3>
                  <div className="space-y-4 text-gray-600">
                  <p>Manzil: Toshkent shahri, Muqimiy ko'chasi 44-A uy</p>
                  <p>Tel: +998 95 150 00 00</p>
                  <p>Email: info@nemoavia.uz</p>
                  <p>Ish vaqti: Du-Sha 24 soat</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="w-full h-[350px] rounded-lg overflow-hidden">
                    <iframe className="w-full h-full rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.2835640978988!2d69.23692447590305!3d41.28093263920834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8af549caa943%3A0xb57ba020a1de5d09!2z0YPQu9C40YbQsCDQnNGD0LrQuNC80LggNDQsINCi0LDRiNC60LXQvdGCLCBUYXNoa2VudCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1734545057788!5m2!1sru!2s">
                    </iframe>
                  </div>
                </div>
              </div>
        </div>
       </div>
    </div>
  )
}

export default Contact