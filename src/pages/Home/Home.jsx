import { RiContactsLine } from "react-icons/ri"


function Home() {

  return (
    <main className="bg-[#2e4ddb] pt-[70px] px-[20px]">
        <div  className="flex items-center justify-start flex-col gap-[10px] pt-[70px] pb-[160px]">
            <h1 data-aos="zoom-in" data-aos-delay="200" className=" text-gray-100 font-bold text-[60px] text-center max-[615px]:text-[45px] max-[430px]:text-[35px]">Sayohatingizni biz bilan boshlang</h1>
            <p className="text-gray-100 font-medium text-[26px] pb-[30px] text-center max-[430px]:text-[23px]">Nemo Travel - huzur uchun yo'l</p>
            <div className="flex items-center justify-center flex-wrap gap-[50px] rounded-[15px] md:rounded-[100px] bg-gray-100 px-[35px] py-[30px]">
                <div className="flex items-center justify-center gap-[10px]">
                    <div className="bg-[#2e4ddb] w-[45px] h-[45px] rounded-[50%] p-[13px]">
                        <RiContactsLine className="text-gray-100 text-[17px]"/>
                    </div>
                    <div className="">
                        <p className="text-gray-700 text-[15px] font-normal">Mamnun mijozlar</p>
                        <p className="text-black text-[18px] font-bold">45000+</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-[10px]">
                    <div className="bg-[#2e4ddb] w-[45px] h-[45px] rounded-[50%] p-[13px]">
                        <RiContactsLine className="text-gray-100 text-[17px]"/>
                    </div>
                    <div className="">
                        <p className="text-gray-700 text-[15px] font-normal">Mamlakatlar</p>
                        <p className="text-black text-[18px] font-bold">30+</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-[10px]">
                    <div className="bg-[#2e4ddb] w-[45px] h-[45px] rounded-[50%] p-[13px]">
                        <RiContactsLine className="text-gray-100 text-[17px]"/>
                    </div>
                    <div className="">
                        <p className="text-gray-700 text-[15px] font-normal">Tajriba</p>
                        <p className="text-black text-[18px] font-bold">5+ yil</p>
                    </div>
                </div>
                <div className="bg-[#2e4ddb] w-[180px] h-[45px] rounded-[23px] py-[8px] px-[27px]">
                    <a href="#" className="text-gray-100 text-center">Batafsil ma'lumot</a>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Home