import React from 'react'
import { Link } from 'react-router-dom';
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
function DashboardNavbar() {
    let navMenuData = [
        {Litext: 'Dashboard'},
        {Litext: 'Feedback'},
        {Litext: 'Events'},
        {Litext: 'Leaderboard'},
        {Litext: 'Rewards'},
    ]
  return (
    <div className='ml-[20%] flex justify-between mr-[2%] items-center'>
      <div>
        <Link to = '/student/dashboard/'>
        <h1 className='font-bold text-[20px]'>EduPulse</h1>
        </Link>
      </div>

      {/* List */}
      <div className='flex'>
      {
        navMenuData.map((data,index)=>(
            <div className='p-1'>
                <li className='list-none p-2 cursor-pointer hover:text-gray-500 '>{data.Litext}</li>
            </div>
        ))
      }</div>  
      <div className='flex justify-between'>
        <div className='text-2xl p-1 mx-1 border-1 border-[#ebebeb] rounded-4xl shadow hover:bg-slate-50 cursor-pointer'> <IoMdNotificationsOutline /> </div>
        <div className='text-2xl p-1 mx-1 border-1 border-[#ebebeb] rounded-4xl shadow hover:bg-slate-50 cursor-pointer'> <CgProfile /> </div>
      </div>

    </div>
  )
}

export default DashboardNavbar
