import React from "react"
import { FaDiscord } from "react-icons/fa";
import { AiOutlineLinkedin,AiOutlineInstagram,AiOutlineTwitter,AiOutlineGithub } from "react-icons/ai";
import Lists from "./Lists";
import Image from 'next/image'
import Logo from '../public/logo.png'
import Link from 'next/link'

export default function Footer() {
   const CompanyInfoLinks = [
      {
         title: "About Us",
         link: "/",
      },
      {
         title: "Help",
         link: "/",
      },
      {
         title: "Privacy Policy",
         link: "/",
      },
      {
         title: "Terms and Conditions",
         link: "/",
      },
   ];
   const OurCourses = [
      {
         title: "Design",
         link: "/",
      },
      {
         title: "Coding",
         link: "/",
      },
      {
         title: "Arts",
         link: "/",
      },
      {
         title: "ILiterature",
         link: "/",
      },
   ];
   return (
      <divc className="flex flex-col items-center w-full bg-black">
         <div className="w-full max-w-[1440px] px-3 py-5  lg:px-7 lg:py-11 md:flex md:flex-row md:justify-between">
            <div className="w-full px-2 md:w-auto flex justify-between mb-[50px]">
               <a href="/" className="">
                  <Image
                     src={Logo}
                     alt="logo"
                     className="object-contain w-[116px] md:w-48 lg:w-64 flex-shrink-0 
                  "
                     width={100}
                     height={100}
                  />
               </a>
            </div>
            <div
               className="pl-5 grid 
            grid-cols-2
            gap-x-14 gap-y-6 md:gap-x-[92px] md:gap-y-0 my-[50px] md:mt-[100px] md:mb-0 md:px-5 lg:px-10"
            >
               <Lists
                  className={"whitespace-nowrap"}
                  heading={"Company Information"}
                  links={CompanyInfoLinks}
               />
               <Lists
                  heading={"Our Course"}
                  links={OurCourses}
               />
            </div>
            <div className="hidden md:flex flex-col justify-end">
               <p className="text-white text-inter text-sm lg:text-xl mb-4 ">
                  Follow Us
               </p>
               <div className=" md:flex flex space-x-[12px] md:space-x-[24px] xl:space-x-[55px] text-white">
         <Link href="#">
            <FaDiscord className="text-[22px] border-2 border-white rounded-full  p-1 md:text-[24px] xl:text-[38px] cursor-pointer" />
         </Link>
         <Link href="#">
            <AiOutlineLinkedin className="text-[22px] border-2 border-white rounded-full  p-1 md:text-[24px] xl:text-[38px] cursor-pointer" />
         </Link>
         <Link href="#">
            <AiOutlineGithub className="text-[22px] border-2 border-white rounded-full  p-1 md:text-[24px] xl:text-[38px] cursor-pointer" />
         </Link>
         <Link href="#">
            <AiOutlineTwitter className="text-[22px] border-2 border-white rounded-full  p-1 md:text-[24px] xl:text-[38px] cursor-pointer" />
         </Link>
         <Link href="#">
            <AiOutlineInstagram className="text-[22px] border-2 border-white rounded-full p-1 md:text-[24px] xl:text-[38px] cursor-pointer" />
         </Link>
      </div>
            </div>
         </div>
      </divc>
   );
}