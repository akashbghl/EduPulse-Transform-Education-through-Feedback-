import React from 'react'
import { FaRegMessage } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa6";
import { BsFillTrophyFill } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { IoPerson } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { AiFillThunderbolt } from "react-icons/ai";
function Feature() {

    let datas = [
        {
            icon: FaRegMessage,
            heading: "Anonymous Feedback",
            title: "Provide honest feedback without revealing your identity",
            info: "Students can share their thoughts on lectures, teaching methods, and course content without fear of judgment, creating a safe space for constructive criticism.",
            btn: "See how it works",
        },
        {
            icon: FaBookOpen,
            heading: "Interactive Quizzes",
            title: "Reinforce learning with daily challenges",
            info: "Engage with course material through interactive quizzes that test knowledge, improve retention, and make learning fun while earning points.",
            btn: "See how it works",
        },
        {
            icon: BsFillTrophyFill,
            heading: "Rewards System",
            title: "Earn points and redeem for valuable rewards",
            info: "Turn participation into tangible benefits with a comprehensive rewards system that offers cafeteria vouchers, bookstore discounts, and more.",
            btn: "See how it works",
        },
        {
            icon: GoGraph,
            heading: "Analytics Dashboard",
            title: "Gain insights from comprehensive data",
            info: "Teachers can track student engagement, comprehension, and feedback trends through intuitive visualizations and detailed reports.",
            btn: "See how it works",
        },
        {
            icon: SlCalender,
            heading: "Event & Contests",
            title: "Participate in engaging academic activities",
            info: "Join hackathons, coding competitions, workshops, and other events that enhance learning while building community and practical skills.",
            btn: "See how it works",
        },
        {
            icon: IoPerson,
            heading: "Community Building",
            title: "Foster connections between students and teachers",
            info: "Create a stronger educational community through shared goals, collaborative activities, and meaningful interactions between all participants.",
            btn: "See how it works",
        },
        {
            icon: FaBell,
            heading: "Real-Time Notification",
            title: "Stay updated on important events",
            info: "Receive timely alerts about upcoming quizzes, feedback requests, event registrations, and reward redemptions to never miss an opportunity.",
            btn: "See how it works",
        },
        {
            icon: MdSecurity,
            heading: "Privacy & Security",
            title: "Protect user data and ensure anonymity",
            info: "Advanced security measures ensure that feedback remains truly anonymous and all user data is protected with industry-standard encryption.",
            btn: "See how it works",
        },
        {
            icon: AiFillThunderbolt,
            heading: "Performance Tracking",
            title: "Monitor progress and improvement",
            info: "Students and teachers can track performance metrics over time, identifying areas of strength and opportunities for improvement.",
            btn: "See how it works",
        }
    ]

    return (
        <>
            <div className='w-screen p-8'>
                <div className="heading w-full h-fit p-2 flex justify-center items-center gap-2 flex-col">
                    <div className="head text-5xl font-bold">Platform Features</div>
                    <div className="para w-[45vw] text-center text-xl text-zinc-500"><p>Discover how EduPulse transforms the educational experience with these powerful features</p></div>
                </div>
                <div className="main w-full h-fit my-6 px-18 grid grid-cols-3 gap-2 tracking-tight">
                    {datas.map((item, index) => {
                        return (
                            <div key={index} className="my-2  h-[45vh] relative rounded-lg bg-white border-2 border-zinc-300 flex items-start justify-center flex-col gap-1 p-4">
                                <div className="icon w-14 h-14 rounded-lg bg-zinc-200 flex justify-center items-center"><item.icon size={30} /></div>
                                <div className="header">
                                    <h2 className='text-2xl font-semibold'>{item.heading}</h2>
                                    <p className=' text-zinc-500'>{item.title}</p>
                                </div>
                                <div className="para my-4  text-zinc-500">{item.info}</div>
                                <div className="btn font-semibold absolute bottom-4">{item.btn}</div>
                            </div>
                        )
                    })}
                </div>
                <div className="bottom w-full h-fit flex flex-col justify-center items-center p-4 gap-2">
                    <div className='font-bold text-2xl'><h1>Ready to transform your educational experience?</h1></div>
                    <div className='btns flex justify-center items-center gap-4'>
                        <button className='w-36 h-12 rounded-lg bg-black text-white text-center p-2'>Get Started</button>
                        <button className='w-36 h-12 rounded-lg border-1 border-zinc-400 text-center p-2'>Contact Sales</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feature