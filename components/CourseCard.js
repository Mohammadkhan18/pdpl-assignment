import React from 'react'
import Image from'next/image'
import Laptop from '../public/Programmer coding on laptop.png'

const CourseCard = () => {
  return (
    <>
    <div
   className="rounded-2xl border-2 border-white shadow-lg bg-[#141518] py-[10px] px-[12px] h-[230px] md:h-[17rem] w-[250px] md:w-[355px]  md:p-5 flex flex-col  "
 >
   <div className="flex justify-between ">
     <div>
       <Image
         src={Laptop}
         width={60}
         height={60}
         alt="f"
         className="md:w-[88px] md:h-[88px]"
       ></Image>
     </div>
     <div className="text-[10px] md:text-sm text-[#E1348B] ">
       <span className="mr-3">Lessons</span>
       <span>Beginner</span>
     </div>
   </div>
   <div className="">
     <h1 className="text-slate-400 text-[6px] md:text-sm font-medium">COURSE</h1>
     <h1 className="text-white text-sm md:text-2xl font-medium">web-dev</h1>
     <div className="text-left pr-3">
       <p className="text-white text-[9px] md:text-sm mb-1 md:mb-6">A good course to start web development</p>
     </div>
     <div className="flex justify-end">
       <button
         type="button"
         className='w-[72px] rounded-[10px] h-[28px] md:w-[111px] md:h-[39px] flex items-center justify-center text-white border border-[#e1348b] text-xs md:text-sm hover:bg-black'
       >
         Explore
       </button>
     </div>
   </div>
 </div>
</>
  )
}

export default CourseCard