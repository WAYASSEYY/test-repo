import React from 'react'
import Sidebar from '../component/layout/sidebar'
import Header from '../component/layout/header'
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div className='h-screen w-full flex justify-between'>
    <div className='border h-full w-[17%]'>
      <Sidebar/>
    </div>

    <div className='h-full w-[83%] p-4 flex flex-col justify-start '>
      
      <Header/>

      <div className='border min-h-[80vh] bg-white'>
          <Outlet/>
      </div>
      
    </div>
    
      
    </div>
  )
}
