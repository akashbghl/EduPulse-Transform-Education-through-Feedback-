import React from 'react'
import { useState } from 'react'
import SimpleCard from './simple_ReusableComponents/SimpleCard'
import { Link } from 'react-router-dom'

function Demo() {
  const features = [
    {
      heading: 'Anonymous Feedback',
      summary: 'Students can provide honest feedback after each lecture without revealing their identity, creating a safe space for constructive criticism and suggestions.'
    },
    {
      heading: 'Interactive Quizzes',
      summary: 'Daily quizzes and challenges help reinforce learning concepts while earning points that can be redeemed for rewards.'
    },
    {
      heading: 'Analytics Dashboard',
      summary: 'Teachers gain valuable insights through comprehensive analytics on student engagement, comprehension, and feedback trends.'
    },
    {
      heading: 'Rewards System',
      summary: 'Students earn points for participation, feedback, and quiz performance, which can be redeemed for various rewards like cafeteria vouchers or bookstore discounts.'
    },
  ]

  const testimonialsData = [
    {
      icon: '🧑🏻‍🏫',
      name: 'Mr. Kishor Kumar',
      subline: 'Professor of Computer Science',
      thought: '"EduPulse has transformed how I understand student needs. The anonymous feedback feature has led to meaningful improvements in my teaching approach, and I' + 've seen a significant increase in student engagement."'
    },
    {
      icon: '👲',
      name: 'Prof. Aakash Jain',
      subline: 'Professor of Computer Science',
      thought: '"The gamification elements make learning more fun and competitive. I love seeing my name on the leaderboard, and the rewards for participation are a great incentive to stay engaged with my courses."'
    },
    {
      icon: '👩‍🏫',
      name: 'Mrs. Garima Singh',
      subline: 'Professor of Computer Science',
      thought: '"Implementing EduPulse across our department has led to a 40% increase in student participation and significantly improved teaching quality. The analytics provide invaluable insights for curriculum development."'
    },
  ]

  const [activeTab, setActiveTab] = useState('overview')
  return (
    <div className='w-[60%] m-auto'>
      {/* video frame */}
      <div className=' mt-[5vh] border-1 border-[#e7e7e7] shadow-xl rounded-md h-[550px]'>
        <video src='../../public/demo.mp4' controls className='h-[440px] shadow w-full'></video>
        <div className='ml-5 mt-5'>
          <h1 className='text-2xl font-bold'>EduPulse Demo Video</h1>
          <p className='text-gray-700'>This demo showcases the key features of the EduPulse platform, including anonymous feedback, interactive quizzes, and the rewards system.</p>
        </div>
      </div>
      {/* Tab buttons */}
      <div className='w-full flex px-1 py-[5px] bg-[#f6f3f3] gap-2 my-5 rounded-md items-center text-center'>
        <button
          onClick={() => setActiveTab('overview')}
          className={`cursor-pointer w-full rounded-md ${activeTab === 'overview' ? 'bg-white py-[5px] shadow' : ''}`}>
          Overview
        </button>
        <button
          onClick={() => setActiveTab('keyFeatures')}
          className={`cursor-pointer w-full rounded-md ${activeTab === 'keyFeatures' ? 'bg-white py-[5px] shadow' : ''}`}>
          Key Features
        </button>
        <button
          onClick={() => setActiveTab('testimonials')}
          className={`cursor-pointer w-full rounded-md ${activeTab === 'testimonials' ? 'bg-white py-[5px] shadow' : ''}`}>
          Testimonials
        </button>
      </div>

      {activeTab === 'overview' ?
        <div className='my-5'>
          <SimpleCard
            cardContent={
              <div className='my-5'>
                <h1 className='text-2xl font-bold'>About EduPulse</h1>
                <p className='text-s text-gray-700'>Transforming education through feedback and engagement</p>
                <p className='mt-5 text-left'>EduPulse is a comprehensive platform designed to enhance the educational experience for both students and teachers. By providing a channel for anonymous feedback, interactive learning activities, and a rewards system, EduPulse creates a more engaging and effective learning environment. <br /><br />
                  Our platform helps teachers understand student needs better while motivating students to actively participate in their education through gamification elements and meaningful feedback opportunities.</p>
                <Link to="/Signup" className="m-auto mt-5 w-[40%] btn  text-gray-600 bg-gray-300 border-1 border-gray-500 px-5 py-2.5 rounded-md cursor-pointer flex justify-center items-center hover:bg-slate-300">Get Started</Link>

              </div>
            }
          />
        </div>
        : ''
      }
      <div className='flex flex-wrap gap-5 my-5'>
        {
          activeTab === 'keyFeatures' ?
            features.map((data, index) => (
              <div className='w-[29vw]'>
                <SimpleCard
                  cardContent={
                    <div>
                      <h1 className='text-2xl my-4'>{data.heading}</h1>
                      <p className='text-gray-700'>{data.summary}</p>
                    </div>
                  }
                />
              </div>
            ))
            : ''
        }
      </div>
      {/* Testimonials */}
      <div className=' my-5'>
        {
          activeTab === 'testimonials' ?
            testimonialsData.map((data, index) => (
              <div className='my-5'>
                <SimpleCard
                  cardContent={
                    <div>
                      <div className='flex items-center'>
                        <div className='text-4xl bg-gray-300 py-1 rounded-full'>{data.icon}</div>
                        <div className='text-left ml-7 my-5'><h1 className='text-xl'>{data.name}</h1>
                        <p className='text-gray-700 text-[14px]'>{data.subline}</p></div>
                      </div>
                      <p className='text-left text-gray-500 italic'>{data.thought}</p>
                    </div>
                  }
                />
              </div>
            ))
            : ''
        }
      </div>
    </div>
  )
}

export default Demo
