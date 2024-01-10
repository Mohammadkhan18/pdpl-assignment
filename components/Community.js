import React from 'react'
import Image from 'next/image'
import rectangle from '../public/rectangle.png'
import studygirl from '../public/Studying-cuate 1 1.png'
import Vector1 from '../public/vector1.png'
import Vector2 from '../public/vector2.png'

const Community = () => {
  return (
    <>
     <div className="flex items-center justify-center min-h-screen pt-10 bg-[#141518]">
         <div className="w-full py-2 px-4 text-white relative space-y-20 max-w-[1440px]">
            <div className=" absolute top-0 left-0 w-full h-full -z-20 " />
            <Image
               width={400}
               alt="img"
               src={Vector1}
               className="absolute top-0 right-0 w-50% z-10 lg:w-20%"
            />
            <Image
               width={400}
               alt="img"
               src={Vector2}
               className="absolute bottom-24 scale-110 -translate-x-[40%]
        left-16 w-50% z-10 lg:w-20%"
            />
            <div className="w-full px-16 grid grid-cols-2">
               <div className="flex flex-col justify-center md:hidden z-10">
                  <h1 className="md:text-4xl text-2xl font-medium md:text-start text-center uppercase ">
                     Join our Neat Skills Community
                  </h1>
                  <p className="font-normal md:text-xl text-base flex items-center md:text-start text-center ">
                     Learn any skill (coding , AI/ML , art , business, stock
                     market , marketing , video editing and much more) at just
                     one nominal monthly subscription cequivalent to your sim
                     card plan
                  </p>
               </div>
               <div className="md:w-full h-full justify-center items-center flex ">
                  <div>
               <div className=" md:w-[40%] lg:w-[40%] border-2 border-solid-white rounded-[10px] p-36 rotate-14 relative top-8 right-16"/>
                 <Image
                     src={studygirl}
                     width={200}
                     height={150}
                     className="rounded-2xl w-[300px] h-[300px] z-20 bg-black border-2 border-white relative bottom-60"
                     alt="image"
                  />
               </div>
               </div>
               <div className="flex flex-col justify-center space-y-6 z-10">
                  <h1 className="lg:text-3xl text-2xl font-medium md:text-start text-center uppercase md:flex hidden">
                     Join our Neat Skills Community
                  </h1>
                  <p className="font-normal md:text-lg text-base md:flex items-center md:text-start text-center hidden">
                     Learn any skill (coding , AI/ML , art , business, stock
                     market , marketing , video editing and much more) at just
                     one nominal monthly subscription cequivalent to your sim
                     card plan
                  </p>
                  <div className="space-y-4 py-10">
                     <div className="space-y-2 px-20">
                        <div className="flex space-x-4">
                           <Image src={rectangle} className='w-[10px] h-[10px] mt-2' alt="main" />
                           <h1 className="font-semibold text-xl">
                              Easily accessible
                           </h1>
                        </div>
                        <p className="flex flex-col ml-10 font-normal text-base">
                           Learn at the comfort of your home , with regular
                           assessments and doubt sessions.
                        </p>
                     </div>
                     <div className="space-y-2 md:px-20">
                        <div className="flex space-x-6">
                           <Image src={rectangle} className='w-[10px] h-[10px] mt-2' alt="main" />
                           <h1 className="font-semibold text-xl">
                              More affordable cost
                           </h1>
                        </div>
                        <p className="flex flex-col ml-10 font-normal text-base">
                           Monthly subscription cost equivalent to your sim card
                           plan.
                        </p>
                     </div>
                     <div className="space-y-2 md:px-20">
                        <div className="flex space-x-6">
                           <Image src={rectangle} className='w-[10px] h-[10px] mt-2' alt="main" />
                           <h1 className="font-semibold text-xl">
                              Fun learning experience
                           </h1>
                        </div>
                        <p className="flex flex-col ml-10 font-normal text-base">
                           Participate in competitions , earn badges and share
                           on social media.
                        </p>
                     </div>
                  </div>
                  <div className="flex justify-center pt-5 pb-24">
                     <a href="">
                        <button className="border-2 border-[#E1348B] bg-[#000000] text-xl md:text-2xl w-64 h-16 justify-center items-center font-medium rounded-[10px] z-40">
                           Subscribe Now
                        </button>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default Community