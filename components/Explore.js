import React from 'react'
import Image from 'next/image'
import Certificate from '../public/certificate.png'


const Explore = () => {
  return (
    <>
     <div className="w-full flex justify-center lg:min-h-screen">
         <div
            className="max-w-[1440px] flex justify-center items-center w-full flex-col-reverse md:flex-row  text-white md:px-[75px] 
         mt-9 mb-[76px] md:my-14
         "
         >
            <div className="px-[30px] md:px-0 md:pr-20 
            lg:py-8
            md:w-1/2">
               <h4
                  className="font-ral line-height-[112%] 
               text-2xl lg:text-4xl  
               font-semibold"
               >
                  Stand out with a skill
                  <span className="text-pink"> certificate</span>
               </h4>

               <p className="
               text-[15px]  lg:text-2xl 
               font-light text-white line-height-[121%] mt-4">
                  Earn globally recognized certification and improve your
                  knowledge.
               </p>

               <div className="mt-16 md:mt-12 w-full flex justify-center md:justify-start">
                  <button className="bg-transparent text-white font-ral border-2 border-white 
                  w-[170px] h-[50px] lg:w-[200px] lg:h-[75px] relative md:ml-[70px] lg:ml-[110px] rounded-[10px] hover:bg-[#e1348b]">
                     Explore Courses
                  </button>
               </div>
            </div>
            <div className="mb-9 md:mb-0 px-9 md:p-0 xl:pr-11 md:w-1/2">
               <Image
                  src={Certificate}
                  alt="img"
                  width={1000}
                  height={1000}
               />
            </div>
         </div>
      </div>
    </>
  )
}

export default Explore