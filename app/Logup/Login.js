'use client'
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import { useState,  } from "react";
import Link from 'next/link'
import Image from 'next/image'
import Studygirl from "../../public/Studying-cuate 1 1.png"
import Logo from "../../public/logo.png"
import { useRouter } from "next/navigation";
import Google from "../../public/_Google.png"
import {auth} from '../../config/firebase'
import { signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import {useAuthState} from "react-firebase-hooks/auth"
import { useEffect } from "react"


function Login () {
  const [user,setUser] = useAuthState(auth)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const router = useRouter()
  const  googleAuth = new GoogleAuthProvider();

  const login = async() =>{
    const result = await signInWithPopup(auth,googleAuth)
  }
  useEffect(()=>{console.log(user)},{user})
  return (
    <div className="w-full md:h-screen flex items-center md:flex-row bg-[#141518] ">
      <div className="md:w-1/2 md:h-[100%]">

        <div className='h-full w-full flex flex-col items-center justify-center'>
          <Image className="lg:w-[220px] md:w-[160px] mt-40" src ={Logo} alt="" />
          <div className={` hidden md:block lg:w-[50%] lg:h-[50%] md:w-[45%]  md:h-[40%] top-[10px] lg:left-[29px]`}></div>
          <div className=" md:w-[40%] lg:w-[40%] border-2 border-solid-white rounded-[10px] p-28 rotate-14 relative top-16 right-16"/>
          <div className=" md:w-[40%] lg:w-[40%] border-2 border-solid-white rounded-[10px] bottom-36 p-1 relative bg-[#141518]">
            <Image src={Studygirl} className="w-full p-1 bg-black" alt="" />
          </div>
          <div className="text-white lg:text-[16px] md:text-[13px] relative bottom-28">
            <h3>Start learning right away !</h3>
          </div>
          <div className="flex flex-row gap-3 justify-evenly relative bottom-20 ">
              <div className="lg:w-[45px] md:w-[30px] h-[7px]  rounded-lg bg-[#fbfcfe] mb-20">
              </div>

              <div className="lg:w-[45px] md:w-[30px] h-[7px]  rounded-lg bg-[#9ea0a3] mb-20">
              </div>

              <div className="lg:w-[45px] md:w-[30px] h-[7px]  rounded-lg bg-[#9ea0a3] mb-20">
              </div>
            </div>
        </div>
      </div>
      <div className="md:w-1/2 h-full pb-4 bg-inherit flex items-start md:items-center align-center justify-center ">
        <div className="md:w-[70%] lg:h-[80%] md:h-[80%] text-center bg-[#222222] lg:px-8 md:py-0 flex flex-col justify-center items-center gap-1 rounded-[30px]">
          <h3 className=" lg:text-[25px] md:text-[22px]  text-white">
            Welcome Back
          </h3>

          <p className="lg:text-[12px] text-white md:text-[10px]">
            Don't have an account ?{" "}
            <span style={{ color: "#e1348b" }}>
              <Link href={"/Logup"}> Start for free </Link>
            </span>
          </p>

          <button
            className="flex lg:text-[15px] md:text-[10px] px-10 py-1 text-white items-center justify-center gap-2 lg:p-1.5px lg:mt-6 md:mt-6 border-2 border-white rounded-[5px]"
             onClick={login}
          >
            <Image
             class src={Google}
             alt='google logo'
             height={25}
             width={25}
             />
            <span>Continue with Google</span>
          </button>
           {user ? router.push("/Dashboard") : " "}
          <div className="flex w-[90%] items-center gap-1  lg:mt-2  text-white">
            <div className="w-[48%] h-0 lg:border-[.5px]  md:border-[.3px] border-[#696969] "></div>
            <h5 className="xl:text-[15px] lg:text-[12px] md:text-[10px] ">
              or
            </h5>
            <div className="w-[48%] h-0 lg:border-[.5px]  md:border-[.3px]  border-[#696969]"></div>
          </div>
          <div className="xl:w-[90%] sd:w-full h-auto">
            <form className="w-full h-auto flex flex-col gap-4 md:mt-1 ">
              <div className="w-full h-auto flex flex-col text-white text-left">
                <span className="xl:text-[16px] lg:text-[14px]  hidden md:inline">
                  Email
                </span>
                <div
                  style={{
                    "background-image":
                      "linear-gradient(177.81deg, rgba(255, 255, 255, 0.11) 1.84%, rgba(255, 255, 255, 0) 123.81%)",
                  }}
                  className="w-full h-auto flex md:p-3 items-center justify-start rounded-[15px] overflow-hidden"
                >
                  <AiOutlineMail
                    size={"2.5vh"}
                    style={{
                      color: "green",
                      width: "30px",
                      marginLeft: "2vh",
                      marginRight: "2vh",
                    }}
                  />
                  <input
                    className="bg-inherit text-white w-full outline-none md:text-[12px] lg:text-[14px]"
                    type="email"
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </div>
              </div>
              <div className="w-full h-auto flex flex-col text-white text-left">
                <span className="lg:text-[14px] hidden md:inline ">
                  Password
                </span>
                <div
                  style={{
                    "background-image":
                      "linear-gradient(177.81deg, rgba(255, 255, 255, 0.11) 1.84%, rgba(255, 255, 255, 0) 123.81%)",
                  }}
                  className="w-full h-auto flex  md:p-3 items-center justify-start rounded-[15px] overflow-hidden"
                >
                  <FaLock
                    size={"2.5vh"}
                    style={{
                      color: "blue",
                      width: "30px",
                      marginLeft: "2vh",
                      marginRight: "2vh",
                    }}
                  />
                  <input
                    className="bg-inherit text-white w-full outline-none md:text-[12px] lg:text-[14px]"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  />
                </div>
              </div>

              <button
                className="w-full mt-2 md:p-3 md:text-[12px] lg:text-[16px]  bg-[#e1348b] text-white rounded-[15px]"
                onClick={() => router.push('/Dashboard')}
              >
                Log In
              </button>

              <div className="text-white lg:text-[13px] md:text-[12px]">
                <h5>
                  Forget Your Password ?
                </h5>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login ;
