import React from 'react'
import Card from '../Card'
import TeamCard from './TeamCard'
import { Link } from 'react-router-dom'

function about() {
  return (
    <div className='m-4 px-18 py-4'>
        <h1 className='text-center font-bold text-4xl text-black'>About EduPulse</h1>
        <p className='text-center text-gray-500 text-[18px] p-3'>Our mission is to transform education through feedback and engagement</p>
        <div className='flex m-auto p-14 items-center gap-4'>
            <div className=' w-[50%] '>
                <h1 className=' text-3xl font-bold my-3'>Our Story</h1>
                <p >EduPulse was founded in 2023 by a team of educators and technologists who recognized the need for better feedback mechanisms in educational institutions. We observed that students often hesitated to provide honest feedback, while teachers lacked the tools to effectively gauge student engagement and comprehension.
                    <br /><br />
                   Our platform was built to bridge this gap, creating a safe space for anonymous feedback while gamifying the educational experience to boost student participation. Today, EduPulse is used by universities and colleges worldwide, helping to create more effective and engaging learning environments.</p>
            </div>
            <div>
                <img src="https://img.freepik.com/free-photo/education-day-arrangement-table-with-copy-space_23-2148721266.jpg?semt=ais_hybrid&w=740" alt="" className=' h-90 rounded-md shadow' />
            </div>
        </div>
            <h1 className=' text-3xl font-bold my-6 text-center'>Our Values</h1>
            <div className='flex justify-center'>
                <Card 
                title={"Transparency"}
                description={"We believe in open communication and honest feedback as the foundation for growth and improvement."}
                />
                <Card
                title={'Innovation'}
                description={'We continuously seek new ways to enhance the educational experience through technology and creative solutions.'}
                />
                <Card 
                title={'Community'}
                description={'We foster connections between students and educators, creating a supportive environment for learning and growth.'}
                />
            </div>
            <h1 className=' text-3xl font-bold my-6 text-center'>Our Team</h1>
            <div className='flex justify-center'>
                <TeamCard 
                name={'Akash Baghel'}
                image={''}
                role={'CEO & Co-Founder'}
                bio={'Former Professor of Education with 15 years of experience in educational technology.'}
                />
                <TeamCard 
                name={'Akash Baghel'}
                image={''}
                role={'CEO & Co-Founder'}
                bio={'Former Professor of Education with 15 years of experience in educational technology.'}
                />
                <TeamCard 
                name={'Akash Baghel'}
                image={''}
                role={'CEO & Co-Founder'}
                bio={'Former Professor of Education with 15 years of experience in educational technology.'}
                />
                <TeamCard 
                name={'Akash Baghel'}
                image={''}
                role={'CEO & Co-Founder'}
                bio={'Former Professor of Education with 15 years of experience in educational technology.'}
                />
            </div>
            <div className='mt-14 bg-[#efefef] py-8 rounded-md'>
            <h1 className=' text-3xl font-bold my-3 text-center'>Join Our Mission</h1>
            <p className='text-center'>We're always looking for passionate individuals who share our vision of transforming education through technology and innovation.</p> 
                <div className='flex gap-2 justify-center my-4'>
                <Link to='/Careers'className="btn w-fit text-white bg-black px-5 py-2.5 rounded-md  cursor-pointer flex justify-center items-center hover:bg-slate-700">View Careers</Link>
                <Link to='/Contacts'className='px-5 py-2.5 border-1 border-black cursor-pointer rounded-md hover:bg-[#efefef]'>Contact Us</Link>
                </div>
            </div>
    </div>
  )
}

export default about