import React from 'react'
import { SlCalender } from "react-icons/sl";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";
import { useState } from 'react';


function T_events() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const datas1 = [
    {
      title: 'Data Structures Quiz',
      para: 'Quiz',
      points: '50 pts',
      date: 'June 5, 2023 ',
      time: ' 3:00 PM - 6:00 PM ',
      location: 'Room 201',
      registration: '28 registrations'
    },
    {
      title: 'Database Design Challenge',
      para: 'Content',
      points: '150 pts',
      date: 'June 5, 2023',
      time: ' 3:00 PM - 6:00 PM ',
      location: 'Room 302',
      registration: '15 registrations'
    },
    {
      title: 'AI Workshop',
      para: 'Workshop',
      points: '100 pts',
      date: 'May 28, 2023 ',
      time: '1:00 PM - 5:00 PM',
      location: 'Auditorium',
      registration: '42 registrations'
    },
  ]
  const datas2 = [
    {
      title: 'Algorithm Challenge',
      para: 'Challenge',
      points: '150 pts',
      date: 'Contest • April 15, 2023',
      time: ' 3:00 PM - 6:00 PM ',
      location: 'Room 302',
      registration: '32 registrations'
    },
    {
      title: 'Web Development Quiz',
      para: 'Quiz',
      points: '250 pts',
      date: 'Quiz • April 5, 2023',
      time: ' 3:00 PM - 6:00 PM ',
      location: 'Room 302',
      registration: '42 registrations'
    }
  ]
  const datas3 = [
    {
      title: 'Machine Learning Workshop',
      para: 'Quiz',
      date: 'June 5, 2023 ',
      time: 'Workshop • Last edited: May 10, 2023',
      location: 'Room 201',
      registration: '30 registrations'
    },
    {
      title: 'Final Exam Preparation Quiz',
      para: 'Quiz',
      date: 'Quiz • Last edited: May 12, 2023',
      time: ' 3:00 PM - 6:00 PM ',
      location: 'Room 101',
      registration: '35 registrations'
    }
  ]

  return (
    <>
      <div className=' h-fit flex justify-center items-center flex-col p-4 gap-1 '>

        <div className="navigation w-full m-2">
          <div className='w-full flex px-1 py-[5px] bg-[#f6f3f3] gap-2 my-5 rounded-md items-center text-center'>
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`cursor-pointer w-full rounded-md ${activeTab === 'upcoming' ? 'bg-white py-[5px] shadow' : ''}`}>
              Upcoming
            </button>
            <button
              onClick={() => setActiveTab('registered')}
              className={`cursor-pointer w-full rounded-md ${activeTab === 'registered' ? 'bg-white py-[5px] shadow' : ''}`}>
              Past
            </button>
            <button
              onClick={() => setActiveTab('p_events')}
              className={`cursor-pointer w-full rounded-md ${activeTab === 'p_events' ? 'bg-white py-[5px] shadow' : ''}`}>
              Drafts
            </button>
          </div>
        </div>
        {activeTab === 'upcoming' ?
          <div className="content w-full h-fit p-2 flex justify-center items-center flex-col gap-2">
            {datas1.map((item, index) => {
              return (
                <div key={index} className="course w-full h-fit p-5 border-2 border-zinc-300 flex flex-col">
                  <div className="title w-full flex justify-between items-center">
                    <div className="left">
                      <h1 className='text-xl font-semibold'>{item.title} <br /> {item.para}</h1>
                    </div>
                    <div className="right"><button className='w-18 h-8 flex justify-center items-center p-2 border-2 border-zinc-300 rounded-2xl'>{item.points}</button></div>
                  </div>
                  <div className="info w-full h-fit my-3 p-2">
                    <p className='flex justify-start items-center gap-2'><SlCalender /> {item.date} </p>
                    <p className='flex justify-start items-center gap-2'><MdOutlineWatchLater size={18} /> {item.time}</p>
                    <p className='flex justify-start items-center gap-2'><MdLocationOn size={18} /> {item.location}</p>
                    <p className='flex justify-start items-center gap-2'><IoPersonAddSharp size={18} /> {item.registration}</p>
                  </div>
                  <div className="btns w-full h-fit flex justify-center items-center gap-1">
                    <button className='w-[50%] border-2 border-zinc-300 p-2 rounded-lg'>Edit</button>
                    <button className='w-[50%] border-2 border-zinc-300 p-2 rounded-lg'>View Details</button>
                  </div>
                </div>
              )
            })}
          </div> : ''}
        {activeTab === 'registered' ?
          <div className="content w-full h-fit p-2 flex justify-center items-center flex-col gap-2">
            {datas2.map((item, index) => {
              return (
                <div key={index} className="course w-full h-fit p-5 border-2 border-zinc-300 flex flex-col">
                  <div className="title w-full flex justify-between items-center">
                    <div className="left">
                      <h1 className='text-xl font-semibold'>{item.title} <br /> {item.para}</h1>
                    </div>
                    <div className="right"><button className='w-18 h-8 flex justify-center items-center p-2 border-2 border-zinc-300 rounded-2xl'>{item.points}</button></div>
                  </div>
                  <div className="info w-full h-fit my-3 p-2">
                    <p className='flex justify-start items-center gap-2'><SlCalender />  {item.date} </p>
                    <p className='flex justify-start items-center gap-2'><MdLocationOn size={18} /> {item.location}</p>
                    <p className='flex justify-start items-center gap-2'><IoPersonAddSharp size={18} />{item.registration}</p>
                  </div>
                  <div className="btns w-full h-fit flex justify-center items-center gap-1">
                    <button className='w-[50%] border-2 border-zinc-300 p-2 rounded-lg'>Edit</button>
                    <button className='w-[50%] border-2 border-zinc-300 p-2 rounded-lg'>View Details</button>
                  </div>
                </div>
              )
            })}
          </div> : ''}
        {activeTab === 'p_events' ?
          <div className="content w-full h-fit p-2 flex justify-center items-center flex-col gap-2">
            {datas3.map((item, index) => {
              return (
                <div key={index} className="course w-full h-fit p-5 border-2 border-zinc-300 flex flex-col">
                  <div className="title w-full flex justify-between items-center">
                    <div className="left">
                      <h1 className='text-xl font-semibold'>{item.title} <br /> {item.para}</h1>
                    </div>
                  </div>
                  <div className="info w-full h-fit my-3 p-2">
                    <p className='flex justify-start items-center gap-2'><SlCalender />  {item.date} </p>
                  </div>
                  <div className="btns w-full h-fit flex justify-center items-center gap-1">
                    <button className='w-[50%] border-2 border-zinc-300 p-2 rounded-lg'>Edit</button>
                    <button className='w-[50%] border-2 border-zinc-300 p-2 rounded-lg'>Publish</button>
                    <button className='w-[50%] border-2 border-zinc-300 p-2 rounded-lg'>View Details</button>
                  </div>
                </div>
              )
            })}
          </div> : ''}
      </div >
    </>
  )
}

export default T_events