import React from 'react'
import Image from 'next/image'
import Activities from '../public/Activity.png'

const Activity = () => {
  return (
    <>
    <div className="flex flex-col py-11 lg:py-[125px] w-full bg-[#141518] justify-center ">
         <div className="max-w-[1440px] space-y-4">
            <div className="flex w-full pl-[22px]  lg:pl-[84px]">
               <p className="text-[15px]  md:text-2xl lg:text-[32px] self-start text-white text-center">
                  A number of available learning <br /> activities that will{" "}
                  <span className="text-[#E1348B]">shock you</span>
               </p>
            </div>
    <div className="w-full px-5  md:px-28 lg:px-48">
               <Image
                  src={Activities}
                  className="w-full object-contain"
                  width={1000}
                  height={1000}
                  alt="img"
               />
            </div>
         </div>
      </div>
    </>
  )
}

export default Activity