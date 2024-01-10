import React from 'react'
import CourseCard from './CourseCard'

const Course = () => {
  return (
    <>
    <div className="w-full flex items-center justify-center flex-col font-raleway">
      <div className="flex flex-col max-w-[90%] md:flex-row justify-around text-white text-2xl lg:text-3xl">
        <div className="flex flex-col justify-evenly ">
          <div className="flex justify-center items-center text-center font-semibold  lg:text-4xl mt-20">
            <span className="hidden md:flex">Explore our Courses</span>
            <span className="md:hidden">Explore our top-rated Courses</span>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="pt-2 md:pt-0 w-3/4 md:w-7/12 text-sm lg:text-xl text-white font-normal justify-between text-center flex items-center mt-20">
            You don't need to have any prior knowledge to take our classes. You
            just need curiosity and the desire to learn.
          </div>
        </div>

        <button className="hidden md:flex border-2 rounded-[10px] text-base font-semibold md:text-lg w-64 h-16 justify-center items-center mt-20  hover:bg-[#e1348b]">
          Explore Courses
        </button>
      </div>
    </div>
    <div className='flex flex-col md:w-[90%] w-[90%] items-center mx-auto mt-28 max-w-[1440px]'>
   <div className='w-full flex flex-col'>
    <div className='grid grid-cols-3 gap-4'>
    <CourseCard/>
    <CourseCard/>
    <CourseCard/>
    <CourseCard/>
    <CourseCard/>
    <CourseCard/>
    </div>
    </div>
    </div>
 </>
  )
}

export default Course