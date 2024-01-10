import React from 'react'
import Carousel from './Carousel'

const Professors = () => {
  return (
    <>
		<div className='flex justify-center items-center h-screen w-full bg-[#141518] text-white font-raleway pt-40 mb-32'>
			<div className='bg-[#1E1E1E] w-[90%] rounded-2xl px-5 py-9 md:pt-[110px] md:pb-[129px] max-w-[1440px]'>
				<div className='flex flex-col md:flex-row justify-center items-center'>
					<div className=" text-2xl md:text-3xl flex flex-col items-center">
						<h1>Meet Our</h1>
						<h1 className='underline decoration-pink-600 decoration-4'>Mentors</h1>
					</div>
					<div className='text-sm md:text-base md:w-1/2 pt-4 md:pt-12 px-4 md:pl-8'>
						Neat Skills offers the world's best classes from the
						world's best practitioners. It's like having a mentor at
						your fingertips - no matter where you are
					</div>
				</div>
				<div>
					<div className='flex items-center justify-center mt-10 p-2'>
						<Carousel/>
					</div>
				</div>
			</div>
		</div>
        </>
  )
}

export default Professors