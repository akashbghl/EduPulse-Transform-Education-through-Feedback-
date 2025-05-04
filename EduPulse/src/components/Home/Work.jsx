import React from 'react'
import { HiMiniBars3 } from "react-icons/hi2";

function Work() {

    let datas = [
        {
            icon:    <HiMiniBars3 size={24} className=" text-blue-500"/>,
            title: "anonymous Feedback",
            info: "Students provide honest feedback after each lecture without revealing their identity"
        },
        {
            icon:    <HiMiniBars3 />,
            title: "Interactive Events",
            info: "Participate in quizzes, contests, and events to earn points and rewards"
        },
        {
            icon:    <HiMiniBars3 />,
            title: "Performance Analytics",
            info: "Teachers gain insights from feedback to improve their teaching methods"
        }
    ]

  return (
    <>
    <div className='w-full h-fit bg-[#f7f7f7] p-10'>
        <div className="work flex justify-center items-center gap-5 flex-col">
            <h1 className='font-bold text-4xl'>How it Works</h1>
            <p className='text-xl text-gray-500 text-center'>Our platform connects students and teachers through anonymous feedback and engaging <br /> activities</p>
        </div>
        <div className="card flex justify-center items-center gap-6">
        {datas.map((item,index)=>{
            return(
                <div className='w-[24vw]  h-fit text-center p-5 flex justify-center items-center flex-col gap-6 border-1 border-[#adadad] rounded-xl border-x-fuchsia-200'>
                        <div className="icon bg-[#c8c7c7] text-blue-600 p-4 rounded cursor-pointer">
                            {item.icon}
                        </div>
                        <div className="title text-2xl font-semibold text-[#5c5b5b]">
                            {item.title}
                        </div>
                        <div className="info">
                            {item.info}
                        </div>
                </div>
            )
        })}
        </div>
    </div>
    </>
  )
}

export default Work
