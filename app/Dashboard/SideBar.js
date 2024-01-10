import Image from "next/image";
import Link from "next/link";
import Logo from '../../public/logo.png'

import { AiOutlineArrowRight, AiOutlineSetting,AiOutlineLogout } from "react-icons/ai";
const Sidebar = () => {
  return (
    <>

      <div className=" md:flex left-0 top-0  bg-[#15161B] flex flex-col w-[250px] h-[60rem] px-5 ">
        <div >
          <div >
            <Image
              src={Logo}
              width={400}
              height={400}
              alt="logo"
              className="py-5"
            />
          </div>
          <div className="flex flex-col h-full justify-around ">
            <ul>
              <li className="space-y-[10px]">
              <Link
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-white"
                >
                  <label className="inline-flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="h-3 w-3 text-gray-400"
                    />{" "}
                    <span>Profile</span>
                  </label>
                </Link>

                <Link
                  href="#"
                  className="flex items-center p-2 text-base font-normal  text-white rounded-lg"
                >
                  <label className="inline-flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="h-3 w-3 text-gray-400"
                    />{" "}
                    <span className="ml-3 text-[#E1348B]">Home</span>

                  </label>
                </Link>

                <hr className="h-px  my-8 bg-gray-500 border-0 w-[90%] m-auto "></hr>
                <Link
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-white rounded-lg"
                >
                  <label className="inline-flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="h-3 w-3 text-gray-400"
                    />{" "}

                    <span>Courses</span>

                  </label>
                </Link>
                <Link
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-white rounded-lg"
                >
                  <label className="inline-flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="h-3 w-3 text-gray-400"
                    />{" "}
                    <span>
                      Schedule
                    </span>
                  </label>
                </Link>

                <Link
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-white rounded-lg"
                >
                  <label className="inline-flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="h-3 w-3 text-gray-400"
                    />{" "}
                    <span>Study Material</span>
                  </label>
                </Link>
                <Link
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-white rounded-lg  "
                >
                  <label className="inline-flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="h-3 w-3 text-gray-400"
                    />{" "}
                    <span>Assignment</span>
                  </label>
                </Link>
                <hr className="h-px  my-8 bg-gray-500 border-0 w-[90%] m-auto "></hr>
                <Link
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-white rounded-lg "
                >
                  <label className="inline-flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="h-3 w-3 text-gray-400"
                    />{" "}
                    <span>Chats</span>
                  </label>
                </Link>
                <div className="  font-semibold text-white bg-[#373A41] flex flex-col mt-9 rounded-xl">
                  <div className=" px-5 py-2 ">
                    <h1 className="text-l font-Inter">
                      Discord <br /> Community
                    </h1>
                    <button className="inline-flex items-center mt-10 gap-3  px-5 py-1 text-indigo-100 transition-colors duration-150 bg-[#E1348B] rounded-lg focus:shadow-outline text-sm ">
                      <span>Join</span>
                      <AiOutlineArrowRight />
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-white flex-row  space-y-5 mt-20">
          <button className=" bg-[#373A41]  flex  justify-center  items-center w-full  rounded   pt-2.5 pb-2 text-xs font-medium uppercase leading-normal ">
          <span className="mr-5">Log Out </span>
            <AiOutlineLogout className="h-[20px] w-[20px]" /> 
          </button>
        </div>
        <div className="text-white flex-row  space-y-5 mt-5">
          <button className=" bg-[#373A41]  flex  justify-center  items-center w-full  rounded   pt-2.5 pb-2 text-xs font-medium uppercase leading-normal ">
            <AiOutlineSetting className="h-[20px] w-[20px]" />
            <span className="ml-5">Settings</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
