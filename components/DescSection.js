import React from 'react'
import Image from 'next/image'
import Desc from "../public/Desc-img.png"

const DescSection = () => {
     return (
        <>
           <div className="pt-[49px] md:py-[105px] min-h-screen flex flex-col justify-center items-center bg-[#141518]">
              <div className="w-full h-full grid grid-rows-2 max-w-[1440px] lg:grid-rows-none lg:grid-cols-2 ">
                 <div className=" justify-center flex items-center row-span-1 lg:row-auto lg:col-span-1">
                    <div className="mx-7 lg:ml-[92px] pt-3 mt-[24px] md:mt-0">
                       <h1
                          className={` text-white font-ral lg:text-left lg:text-[86px] md:text-[76px] sm:text-[50px] text-[32px] text-center font-semibold mx-5 md:mx-0`}
                       >
                          Lets{" "}
                          <span className='underline decoration-4 decoration-pink-600'>
                             Learn{" "}
                          </span>{" "}
                          beyond the limits
                       </h1>
                       <div className="text-white text-center mt-7 lg:text-left lg:mx-0 md:text-xl px-2">
                          <p>
                             Educational Programs that will help you start , grow
                             and upskill. Book a demo class today !!
                          </p>
                       </div>
                       <div className="w-full flex  justify-center lg:justify-start">
                          <div className=" flex flex-wrap justify-between text-white max-w-xs md:max-w-lg w-full">
                             <button className=" text-xs md:text-xl lg:text-2xl border md:border-2 h-[42px] md:h-[70px] mt-8 px-6 hover:bg-[#e1348b] flex items-center rounded-[10px]">
                                Start Learning
                             </button>
                             <button className=" text-xs md:text-xl border md:border-2 h-[42px] md:h-[70px] mt-8 px-[9px] md:px-4 bg-[#e1348b] flex items-center rounded-[10px] ">
                                Watch Demo Session
                             </button>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="lg:col-span-1  lg:row-auto row-span-1 justify-center hidden lg:flex items-center lg:mr-[92px]">
                    <Image
                       alt="Image"
                       src={Desc}
                       width={600}
                       height={1000}
                    />
                 </div>
              </div>
           </div>
        </>
     );
}

export default DescSection