import React from 'react'

import 'aos/dist/aos.css'; 
import AOS from 'aos'
import { useEffect } from 'react';

function About() {

    useEffect(() => {
            AOS.init({
              duration: 1000,
              once: false, 
            });
        }, []);

  return (
    <div>
        <div className="max-w-[1240px] px-[20px] py-[40px] mx-auto flex justify-start items-center flex-col">
            <h2 className="text-[38px] font-bold">Biz haqimizda</h2>
            <p className="text-[24px] text-center text-gray-600">Sizning ishonli sayohat hamkoringiz</p>
            <div className="flex justify-center items-center flex-wrap gap-[35px] pt-[30px]">
                <div className="p-[35px] w-[48%] shadow-xl rounded-[8px] max-[915px]:w-[80%] max-[755px]:w-[100%]">
                    <h2 className="text-[25px] text-black font-bold pb-[20px] max-[390px]:text-[20px]">Bizning vazifamiz</h2>
                    <p className="text-[16px] text-gray-500 font-normal">
                        Har bir mijozga individual yondashuv orqali yuqori sifatli va qulay sayohat xizmatlarini taqdim etish
                    </p>
                </div>
                <div  className="p-[35px] w-[48%] shadow-xl rounded-[8px] max-[915px]:w-[80%] max-[755px]:w-[100%]">
                    <h2 className="text-[25px] text-black font-bold pb-[20px] max-[390px]:text-[20px]">Bizning maqsadimiz</h2>
                    <p className="text-[16px] text-gray-500 font-normal">
                        O'zbekistonda yetakchi sayohat kompaniyasiga aylanish va xalqaro miqyosida tan olingan brend bo'lish
                    </p>
                </div>
            </div>
            {/* malumot */}
            <div className="px-[20px] flex items-center justify-between flex-wrap gap-[20px] pt-[60px]">
                <div data-aos="fade-right" className="w-[47%]  max-[800px]:w-[100%]">
                    <p className="text-[17px] text-gray-600 font-normal leading-[32px]">
                        Bizning turizm kompaniyamiz dunyo bo‘ylab sayohatlar va qulayliklar taklif etadi. Biz sizni orzudagi manzilingizga yetkazib, unutilmas xotiralar yaratishga yordam beramiz. Kompaniyamiz UzAirways, Centrum Air, Turkish Airlines kabi yirik aviakompaniyalar bilan hamkorlik qiladi.
                    </p>
                    <p className="text-[17px] text-gray-600 font-normal leading-[32px] pt-[15px]">
                        Bizning tajribali jamoamiz har bir detallni hisobga olib, rejalashtirilgan mukammal xizmatni taqdim etadi. Biz bilan dunyoning istalgan joyiga qulay va ishonchli sayohat qiling! Xizmatlarimiz: Fransiyaga turlar va dam olish,
                        Ko‘ngilli tibbiy sug‘urtalash, Sug‘urta xizmatlari (Toshkentda va O‘zbekistonda), Turfirmalari va turagentliklari O‘zbekistonda, Turistlarni sug‘urtalash, Turizm va sayyohlik xizmatlari O‘zbekistonda, Turlar Antaliyaga va dam olish Antaliyada, Turlar BAAga va dam olish BAAda, Turlar Bali oroliga va dam olish Bali orolida, Turlar Germaniyaga va dam olish Germaniyada, Turlar Indoneziyaga va dam olish Indoneziyada.
                    </p>
                </div>
                <div data-aos="fade-left" className="w-[50%] max-[800px]:w-[450px]  max-[470px]:hidden">
                    <div className="about w-[100%] h-[270px]  bg-center bg-no-repeat bg-cover rounded-[10px]">    
                    </div>
                    <div className="flex items-center justify-between w-[100%] h-[180px] pt-[15px]">
                        <div className="w-[49%] h-[100%] about-bg bg-center bg-no-repeat bg-cover rounded-[10px]"></div>
                        <div className="w-[49%] h-[100%] about-bgs bg-center bg-no-repeat bg-cover rounded-[10px]"></div>
                    </div>
                </div>
            </div>
            {/* Bizning jamoa */}
            <h2 className="text-[36px] font-bold py-[35px]">Bizning jamoa</h2>
            <div className="flex items-center justify-center flex-wrap gap-[20px]">
                <div className="flex items-center justify-center w-[280px] h-[120px] shadow-[0px_2px_10px_2px_#F2652250] rounded-[8px]">
                    <p className="text-[23px] text-gray-800 font-medium">Direktor</p>
                </div>
                <div className="flex items-center justify-center w-[280px] h-[120px] shadow-[0px_2px_10px_2px_#F2652250] rounded-[8px]">
                    <p className="text-[23px] text-gray-800 font-medium">Yurist</p>
                </div>
                <div className="flex items-center justify-center w-[280px] h-[120px] shadow-[0px_2px_10px_2px_#F2652250] rounded-[8px]">
                    <p className="text-[23px] text-gray-800 font-medium">Operator</p>
                </div>
                <div className="flex items-center justify-center w-[280px] h-[120px] shadow-[0px_2px_10px_2px_#F2652250] rounded-[8px]">
                    <p className="text-[23px] text-gray-800 font-medium">Administrator</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About