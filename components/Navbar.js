'use client'
import { useEffect, useState } from "react";
import Image from 'next/image'
import { ImMenu } from "react-icons/im";
import Logo from '../public/logo.png'
import Link from 'next/link'

const Navbar = () => {
   const [nav, setNav] = useState(false);

   const handleNav = () => {
      setNav(!nav);
   };
    const [color, setColor] = useState(false);
 
    const changeColor = () => {
       if (window.scrollY >= 90) {
          setColor(true);
       } else {
          setColor(false);
       }
    };
 
    useEffect(() => {
       window.addEventListener("scroll", changeColor);
    }, []);
 
    return (
       <>
          <div
             className={` w-full px-4 md:px-8 lg:px-16 py-4 ${
                color ? "bg-[#131313] shadow-xl" : "bg-transparent"
             } fixed z-[100] transition-all duration-300 h-[49px] md:h-[105px] flex justify-center items-center`}
          >
             <div className="w-full max-w-[1440px] flex justify-between items-center font-ral ">
                <Link
                   href="/"
                   className="uppercase hover:border-b w-[112px] h-[43px] md:w-[186px] md:h-[71px] flex-shrink-0"
                >
                   <Image
                      src={Logo}
                      alt="logo"
                      className="w-full h-full object-contain
                            "
                      width={100}
                      height={100}
                   />
                </Link>
                <div className="hidden md:flex justify-center  w-full items-center text-white text-xs  lg:text-base mx-10 lg:mx-12">
                   <ul className="max-w-[407px] w-full flex justify-between">
                      <Link href="#">
                         <li className="text-md uppercase hover:border-b ">
                            Courses
                         </li>
                      </Link>
                      <Link href="#">
                         <li className="text-md uppercase hover:border-b ">
                            About Us
                         </li>
                      </Link>
                      <Link href="#">
                         <li className="text-md uppercase hover:border-b ">
                            Contact
                         </li>
                      </Link>
                   </ul>
                </div>
                <div className="hidden md:flex items-center">
                   <Link href={"/Logup"}>
                      <button
                         type="button"
                         className="bg-[#e1348b] text-white font-Inter uppercase font-semibold rounded-[10px] border-2 border-white 
                         text-xs w-[77px] h-7
                         lg:text-xl lg:w-32 lg:h-14 lg:ml-[52px]"
                      >
                         Sign up
                      </button>
                   </Link>
                   <Link href={"/Logup"}>
                      <button
                         type="button"
                         className="bg-transparent text-white font-Inter uppercase font-semibold rounded-[10px] border-2 border-white 
                         text-xs w-[77px] h-7 ml-10
                         lg:text-xl lg:w-32 lg:h-14 lg:ml-[52px]
                         "
                      >
                         LOGIN
                      </button>
                   </Link>
                </div>
             </div>
             <div />
          </div>
          <div
             className={
                nav
                   ? " fixed left-0 top-0 w-full h-screen bg-black/70 z-50  ease-in duration-700 "
                   : " fixed    "
             }
          />
</>
    );
}
export default Navbar