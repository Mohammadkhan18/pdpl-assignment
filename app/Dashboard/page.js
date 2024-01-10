import React from 'react'
import Sidebar from './SideBar'
import LandingPage from './LandingPage'

const page = () => {
  return (
    <>
    <div className='flex flex-row justify-around'>
    <Sidebar/>
    <LandingPage/>
    </div>
    </>
  )
}

export default page