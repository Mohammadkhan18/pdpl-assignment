import React from 'react'
import Header from './Header'
import Greetings from './Greetings'
import Subscription from './Subscription'
import Tips from './Tips'
import LeaderBoard from './LeaderBoard'
import CourseCard from '@/components/CourseCard'

const LandingPage = () => {
  return (
    <>
    <div className="w-[100%] bg-[#2D2E35] rounded-[20px] p-10">
    <Header/>
    <hr className='h-[10px] w-[100%] text-white my-8'/>

    <div className="md:flex gap-5 m-5 md:mt-0 mt-20 text-white">
     <div className="space-y-5 ">
      <Subscription/>
      <Greetings/> 
     <div className='mt-24'>
       <span className='text-[20px] mt-12'> Student Can view this course </span>
        <button className='ml-52 text:lg border-2 border-white py-1 px-2 items-center  rounded-[10px]'>View All</button>
        <div className='w-full flex flex-row mt-12'>
        <div className='grid grid-row-3 gap-2'>
        <CourseCard/>
   </div>
   </div>
     </div>
    </div>
    <div className="md:px-2  md:w-[300px] mt-5 space-y-5 md:space-y-8">
        <Tips/>
        <LeaderBoard/>
    </div>
    </div>
  </div>
    </>
  )
}

export default LandingPage