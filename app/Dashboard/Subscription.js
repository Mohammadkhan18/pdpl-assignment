import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Subscription = () => {
  return (
    <div className="w-full rounded-3xl flex  my-5 text-white pl-8 py-4 bg-gradient-to-r  from-[#E1348B] to-[#CD8BED]">
      <div className="w-full flex">
        <div>
          <div className="text-xs border w-fit md:px-5 px-2 rounded-sm bg-gradient-to-r from-[#DBDBDB59] to-[#DBDBDB7A] mt-4 mb-12">
            <div className="flex gap-2">
              <div className="w-25">Expires in</div>
              <span>:</span>
              <section className="flex">
                <p>0</p>
                <p>d</p>
              </section>
              <section className="flex">
                <p>0</p>
                <p>h</p>
              </section>
              <section className="flex">
                <p>0</p>
                <p>m</p>
              </section>
              <section className="flex">
                <p>0</p>
                <p>s</p>
              </section>
            </div>
          </div>
          <div className=" flex flex-row items-center justify-start  text-left text-[36px] font-inter">
            <div className="flex flex-col items-start justify-start md:space-y-2 mb-10">
              <div className="inline-block md:text-[30px] text-sm ">
                <b>0%</b>{" "}
                <b className="font-raleway">off on Annual Subscription</b>
              </div>
              <div className=" md:text-base  text-sm shrink-0 font-raleway">
                <span >
                  Get unlimited access to all materials just from
                </span>
                <span className="font-medium font-inter">$20/Month</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:w-[100px] w-[100px] mt-20">
          <div className=" border rounded-md bg-[#DBDBDB] lg:flex justify-center items-center text-black text-2xl  h-10" >
            <button className=" p-2">
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscription