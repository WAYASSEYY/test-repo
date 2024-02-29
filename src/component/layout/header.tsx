import { BellOutlined, MoonOutlined, SearchOutlined } from '@ant-design/icons'
import React from 'react'
import usa from "../../assets/usaflag.jpg"
import profile from "../../assets/profile.jpg"

export default function Header() {
  return (
    <div className='w-full rounded-md border p-2 mb-2 flex flex-row pl-4'>
      <SearchOutlined className='h-7 w-7 border items-center justify-center'/>
      <input type="text" placeholder="Search(Ctrl+/)" className='w-[90%] ml-10 outline-none ' />

      <div className='w-32 flex flex-row   justify-between '>
      <img src={usa} alt='' className='h-6 w-6 border rounded-full items-center justify-center mt-1'/>
      <MoonOutlined className=' h-7 w-7  items-center justify-center'/>
      <BellOutlined className='h-7  w-7 items-center justify-center'/>
      <img src={profile} alt="" className='h-7 w-7 border rounded-full items-center justify-center mt-1'/>
      </div>

    </div>
    
  )
}

