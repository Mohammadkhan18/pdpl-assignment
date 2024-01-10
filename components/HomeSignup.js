import React from 'react'
import Image from 'next/image'
import Homesignup from '../public/Group 1916 1.png'
import { AiOutlineArrowRight } from 'react-icons/ai'

const HomeSignup = () => {
  return (
    <>
      <div className="bg-[#141518] flex flex-col justify-center items-center lg:px-[62px] md:px-12 md:min-h-screen py-12 md:py-36 lg:py-56">
         <div
            className="flex  justify-center items-center
         w-full max-w-[1280px] 
        bg-[#e1348b] text-white rounded-3xl 
          py-2 px-5 md:py-4 md:px-16
          "
         >  
            <div className="h-full w-7/12 space-y-3  md:space-y-5 lg:space-y-7 pr-4 md:pr-16
            ">
               <h1 className="text-sm
               md:text-3xl
               lg:text-[40px] lg:leading-[132%]">
                  The great aim of education is not knowledge, but action.
               </h1>
               <div className='flex flex-col'>    
               <button className="flex bg-black justify-evenly items-center w-16 h-[17px] md:h-12 md:w-40 lg:h-16 lg:w-[235px] 
               border-2 rounded-[10px] border-white">
                   <p className="text-[6px] md:text-base lg:text-xl">
                     Sign Up
                  </p>
                  <AiOutlineArrowRight/>
               </button>
            </div>
            </div>
            <div className="w-[400px] pt-8 pb-8">
               <Image
                  src={Homesignup}
                  width={1000}
                  height={1000}
                  alt="image"
                  className="w-full"
               />
            </div>
         </div>
      </div>
      </>
  )
}

export default HomeSignup