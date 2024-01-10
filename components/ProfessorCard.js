import React from 'react'
import Image from 'next/image'
import Female  from '../public/Female.png'

const ProfessorCard = ({name,role}) => {
  return (
    <>
    <div className="h-full w-[85px] md:w-[291px] relative rounded-10 overflow-hidden border-2 border-white flex justify-center items-end">
      <Image
        alt="Jogi"
        src={Female}
        width={291}
        height={413}
        className="absolute top-0 left-0 h-full w-full object-cover"
      />
      <div className="carousel-gradient border-[2px] border-neutral-300 z-10 flex items-center justify-center flex-col w-[54px] h-[26px] mb-1 md:w-[186px] md:h-[89px] md:mb-4">
        <h1 className="font-bold text-[6px] md:text-xl md:mb-2 ">{name}</h1>
        <p className="text-[5px] md:text-base">{role}</p>
      </div>
    </div>
  </>
  )
}

export default ProfessorCard