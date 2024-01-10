import React from 'react'
import Image from 'next/image'
import {AiOutlineSearch } from 'react-icons/ai'
import{ FaBell }from 'react-icons/fa'
import Profile from "../../public/jogi.jpg"
const Header = () => {
  return (
<div className="w-full relative top-0 right-10 space-y-4">

    <div className=" flex  gap-y-6  justify-between md:px-10 ">
  <div className="flex justify-between  items-center">
  <p className="text-white font-Inter relative right-40 text-2xl flex justify-start md:ml-[200px] ml-5 uppercase font-semibold">
    My Progress
  </p>
</div>
<div className="flex items-center gap-x-4">
  <div
    className="md:flex items-center gap-x-2 py-1 md:mr-1 sm:mr-5 sm:py-2 rounded-lg hidden "
    style={{ border: "1px solid #728095" }}
  >
    <AiOutlineSearch className="text-white text-2xl ml-4" />
    <input
      type="text"
      placeholder="Search"
      className="focus:outline-none bg-inherit text-white"
    />
  </div>
    <div className="text-white flex items-center ">
      <FaBell className="text-3xl mr-2" />
      <div className="border border-white rounded-full h-12 w-12 flex justify-center items-center mr-5">
            <Image
              src={Profile}
              alt="img"
              height={100}
              width={100}
              className="rounded-full h-12 w-12 object-contain"
            />
         
      </div>
     </div>
   </div>
   </div>
   </div>
  );
}

export default Header;