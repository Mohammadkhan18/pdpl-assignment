import React from 'react'

const LeaderBoard = () => {
  return (
    <div className=" px-8 pb-5 pt-3  rounded-2xl bg-[#373A41] text-white h-[250px] w-[320px]">
    <div className="flex justify-between  md:mx-0 mx-5 pb-4 items-center">
      <h1 className="text-lg">Leaderboard</h1>
      <button>
        <h1 className="text-[#728095] text-sm">View All</h1>
      </button>
    </div>
        <div className="text-white flex justify-between items-center my-3 opacity-50  ">
         <h1 className='mt-12 ml-12'>No Data Avalaible</h1>
        </div>
  </div>
  )
}

export default LeaderBoard