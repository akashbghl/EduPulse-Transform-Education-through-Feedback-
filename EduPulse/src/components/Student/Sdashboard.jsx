import React, { useState } from 'react'
import Sidebar from '../Teacher/Sidebar'
import SimpleCard from '../simple_ReusableComponents/SimpleCard';
import { FaRedo, FaDollarSign, FaCheckCircle } from 'react-icons/fa';
import DashboardNavbar from '../DashboardNavbar';
import Sfeedback from './Sfeedback';
import S_Events from './S_Events';
import S_Rewards from './S_Rewards';


function Sdashboard({ Student_name }) {
  let sidebardata = [
    { icon: '📖', btntext: "Dashboard", key: "overview" },
    { icon: '🔖', btntext: "Courses", key: "courses" },
    { icon: '🖋️', btntext: "Feedback", key: "feedback" },
    { icon: '📆', btntext: "Events", key: "events" },
    { icon: '🏆', btntext: "Leaderboard", key: "leader" },
  ]
  let currentUser = JSON.parse(localStorage.getItem('currentUser'));
  Student_name = currentUser.name;
  
  const [activeTab, setActiveTab] = useState('overview');
  return (
    <div>
      <DashboardNavbar />
      <Sidebar btndata={sidebardata} onTabSelect={setActiveTab} selectedTab={activeTab} />

      <div className='w-[82%] h-screen bg-[#F8F8F9] ml-[18%]  overflow-y-auto p-6'>
        <h1 className='mt-10 font-bold text-3xl text-black'>Student Dashboard</h1>

        <div className='flex gap-3 items-center float-right '>
          <p className='rounded-xl py-1 px-2 text-xs font-semibold border-[#b5b5b5] border w-fit'>850 Points</p>
          <p className='rounded-xl py-1 px-2 text-xs font-semibold  border-[#b5b5b5] border w-fit'>Rank 5</p>
        </div>
        <p>Welcome back, {Student_name}</p>


        {/* Top tab buttons */}
        <div className='w-full flex py-[5px] bg-[#f6f3f3] gap-2 my-5 rounded-md items-center text-center'>
          <button
            onClick={() => setActiveTab('overview')}
            className={`cursor-pointer w-full rounded-md ${activeTab === 'overview' ? 'bg-white py-[5px] shadow' : ''}`}>
            Overview
          </button>
          <button
            onClick={() => setActiveTab('feedback')}
            className={`cursor-pointer w-full rounded-md ${activeTab === 'feedback' ? 'bg-white py-[5px] shadow' : ''}`}>
            Feedback
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`cursor-pointer w-full rounded-md ${activeTab === 'events' ? 'bg-white py-[5px] shadow' : ''}`}>
            Events & Quizzes
          </button>
          <button
            onClick={() => setActiveTab('rewards')}
            className={`cursor-pointer w-full rounded-md ${activeTab === 'rewards' ? 'bg-white py-[5px] shadow' : ''}`}>
            Rewards
          </button>
        </div>

        {activeTab === 'overview' &&
          <div>
            <div className='flex gap-4 m-4 '>
              <SimpleCard
                cardContent={
                  <div className='text-left h-50'>
                    <h2 className="text-lg font-bold text-black mb-1">Course Progress</h2>
                    <p className="text-sm text-gray-500 mb-4">Your overall progress</p>

                    <div className="mb-3">
                      <div className="flex justify-between text-sm font-medium">
                        <span>Advanced Database Systems</span>
                        <span>75%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div className="h-full bg-black rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="flex justify-between text-sm font-medium">
                        <span>Computer Networks</span>
                        <span>60%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div className="h-full bg-black rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm font-medium">
                        <span>Artificial Intelligence</span>
                        <span>45%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div className="h-full bg-black rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                  </div>
                }
              />
              <SimpleCard
                cardContent={
                  <div className="space-y-2 text-left h-50">
                    <h2 className="text-lg font-bold text-black">Next Lecture</h2>
                    <p className="text-sm text-gray-500">Today at 10:00 AM</p>

                    <p className="text-base font-semibold text-black">Advanced Database Systems</p>
                    <p className="text-sm text-gray-500">Room 302</p>
                    <p className="text-sm text-gray-500">Dr. Rebecca Chen</p>

                    <button className="w-full border border-gray-300 text-black font-semibold py-1 rounded-md hover:bg-gray-100 transition">
                      View Details
                    </button>
                  </div>
                }
              />

              <SimpleCard
                cardContent={
                  <div className='h-50'>
                    <h2 className="text-lg font-bold text-black">Achievements</h2>
                    <p className="text-sm text-gray-500 mb-4">Your recent badges</p>

                    <div className="flex items-center justify-between">

                      <div className="flex flex-col items-center space-y-1">
                        <div className="bg-blue-100 p-3 text-[#9cb3f6] rounded-full">
                          <FaRedo className="text-xl" />
                        </div>
                        <p className="text-sm text-black">Active Learner</p>
                      </div>

                      <div className="flex flex-col items-center space-y-1">
                        <div className="bg-orange-100 text-[#f0b400] p-3 rounded-full">
                          <FaDollarSign className="text-xl" />
                        </div>
                        <p className="text-sm text-black">Quiz Novice</p>
                      </div>

                      <div className="flex flex-col items-center space-y-1">
                        <div className="bg-green-100 text-[#0b950b] p-3 rounded-full">
                          <FaCheckCircle className="text-xl" />
                        </div>
                        <p className="text-sm text-black">3-Day Streak</p>
                      </div>
                    </div>
                  </div>
                }
              />

            </div>
            <div className='flex gap-4 m-4'>
              <SimpleCard
                cardContent={
                  <div className='h-100 text-left'>
                    <h1 className='font-bold text-2xl'>Daily Quiz</h1>
                    <p className='text-[grey] text-[14px]'>Test your knowledge on database concepts</p>
                    {/* Quiz */}
                    <div className='my-4 flex justify-between'>
                      <div>
                        <h1 className='text-l font-semibold'>5 Questions</h1>
                        <p className='text-[grey] text-[16px]'>Earn up to 50 points</p>
                      </div>
                      <div>
                        <button className='bg-black text-white py-2 px-4 cursor-pointer rounded-md hover:bg-gray-800'>Start</button>
                      </div>
                    </div>
                    <div>

                    </div>
                  </div>
                }
              />
              <SimpleCard
                cardContent={
                  <div className="h-100 text-left">
                    <h1 className="font-bold text-2xl mb-1">Leaderboard</h1>
                    <p className="text-[grey] text-[14px] mb-4">Top performers this semester</p>

                    <div className="space-y-3">
                      {[
                        { rank: 1, name: "Emma Wilson", points: 1250 },
                        { rank: 2, name: "Michael Chen", points: 1120 },
                        { rank: 3, name: "Sarah Ahmed", points: 980 },
                        { rank: 4, name: "David Kim", points: 920 },
                        { rank: 5, name: `${Student_name} (You)`, points: 850, isYou: true }
                      ].map(({ rank, name, points, isYou }) => (
                        <div
                          key={rank}
                          className={`flex justify-between items-center p-2 rounded-md ${isYou ? "bg-gray-100" : ""}`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-6 h-6 flex items-center justify-center rounded-full ${rank <= 3 ? "bg-black text-white" : "bg-gray-200 text-black"}`}>
                              {rank}
                            </div>
                            <span className={`text-sm font-medium ${isYou ? "text-black" : ""}`}>{name}</span>
                          </div>
                          <span className="text-sm font-semibold">{points} pts</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 text-center">
                      <a href="#" className="text-sm font-medium text-black underline hover:text-gray-700">
                        View Full Leaderboard
                      </a>
                    </div>
                  </div>
                }
              />

            </div>
          </div>
        }

        {activeTab === 'feedback' &&
          <>
          <Sfeedback/>
          </>
        }
        {activeTab === 'events' &&
          <>
          <S_Events/>
          </>
        }
        {activeTab === 'rewards' &&
          <>
          <S_Rewards/>
          </>
        }

      </div>
    </div>
  )
}

export default Sdashboard
