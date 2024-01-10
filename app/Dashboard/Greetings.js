import React from 'react'

const Greetings = () => {
  return (
    <div className="text-white w-[90%] p-2">
        <div className="flex justify-between items-end m-1">
            <h1 className="text-2xl font-semibold ">Welcome, Guest👋</h1>
          <h1 className="font-semibold">0%</h1>          
        </div>
        <div className="h-3 w-full  rounded-md my-2 bg-[#0d0e14] flex">
          <div
            className={`h-2.5 w-[0] rounded-md bg-[#E1348B]`}
          ></div>
        </div>
        <h1 className="text-xs pl-2">Work Progress</h1>
    </div>
  )
}

export default Greetings