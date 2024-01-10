'use client'
import React from 'react'
import ProfessorCard from './ProfessorCard'
import {Swiper,SwiperSlide} from "swiper/react"
import { Navigation, Pagination} from "swiper/modules"
import "swiper/css"
import "swiper/css/scrollbar"
import "swiper/swiper-bundle.css"
import "swiper/css/effect-coverflow"
import "swiper/css/navigation"
import "swiper/css/pagination"

const Carousel = () => {
  return (
    <>
     <Swiper
         modules={[Navigation, Pagination]}
         spaceBetween={20}
         slidesPerView={3}
         navigation = {true}
         loop = {true}
         onSlideChange={() => console.log('slide change')}
         onSwiper={(swiper) => console.log(swiper)}    
         className="h-[141px] md:h-[400px]"
      >
         <SwiperSlide>
            <div className="w-full h-full flex justify-center items-center">
               <ProfessorCard name="Aman dhatarwall" role={"Career guider"} />
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className="w-full h-full flex justify-center items-center">
               <ProfessorCard name="Andrew Tate" role={"Finance Teacher"} />
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className="w-full h-full flex justify-center items-center">
               <ProfessorCard name="Harikrat sharma" role={"Web developer"} />
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className="w-full h-full flex justify-center items-center">
               <ProfessorCard name="Vishnu bhopal" role={"Data analyst"} />
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className="w-full h-full flex justify-center items-center">
               <ProfessorCard name="ezsnippet" role={"Artist"} />
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className="w-full h-full flex justify-center items-center">
               <ProfessorCard name="Raviraj kumar" role={"Boss"} />
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className="w-full h-full flex justify-center items-center">
               <ProfessorCard name="Preeti Pathak" role={"Art Teacher"} />
            </div>
         </SwiperSlide>
      </Swiper>
</>
  )
}

export default Carousel