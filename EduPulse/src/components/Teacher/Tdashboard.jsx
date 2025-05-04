import React, { useState } from 'react';
import Ecard from './Ecard';
import LectureAnalyticsCard from './AnalyticsCard';
import SuggestionsCard from './SuggestionsCard';
import Sidebar from './Sidebar';
import T_events from './T_events';
import T_Feedback from './T_Feedback';
import DashboardNavbar from '../DashboardNavbar';

function Tdashboard({ Teacher_name }) {
    let sidebardata = [
        { icon: '📖', btntext: "Dashboard", key: "overview" },
        { icon: '🔖', btntext: "Courses", key: "courses" },
        { icon: '🖋️', btntext: "Feedback", key: "feedback" },
        { icon: '🏆', btntext: "Events", key: "events" },
        { icon: '🧑‍🎓', btntext: "Students", key: "students" },
        { icon: '📊', btntext: "Analytics", key: "analytics" },
    ];

    const [activeTab, setActiveTab] = useState('overview');

    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    Teacher_name = currentUser.name;
    return (
        <>
            <DashboardNavbar />
            <div className='flex'>
                {/* Sidebar */}
                <Sidebar btndata={sidebardata} onTabSelect={setActiveTab} selectedTab={activeTab} />

                {/* Main Dashboard */}
                <div className='w-[82%] bg-[#F8F8F9] ml-[18%] h-screen overflow-y-auto p-6'>

                    <h1 className='mt-10 font-bold text-3xl text-black'>Teacher Dashboard</h1>

                    <div className='flex gap-3 items-center float-right '>
                        <p className='rounded-xl p-1 text-[11px] border-[#b5b5b5] border w-fit'>4.7 Average Rating</p>
                        <p className='rounded-xl p-1 text-[11px] border-[#b5b5b5] border w-fit'>85% Feedback Response Rate</p>
                    </div>
                    <p>Welcome back, {Teacher_name}</p>

                    {/* Top tab buttons */}
                    <div className='w-full flex p-1 bg-[#f6f3f3] gap-2 my-5 rounded-md items-center text-center'>
                        <button
                            onClick={() => setActiveTab('overview')}
                            className={`cursor-pointer py-[5px] w-full rounded-md ${activeTab === 'overview' ? 'bg-white shadow' : ''}`}>
                            Overview
                        </button>
                        <button
                            onClick={() => setActiveTab('feedback')}
                            className={`cursor-pointer py-[5px] w-full rounded-md ${activeTab === 'feedback' ? 'bg-white shadow' : ''}`}>
                            Feedback
                        </button>
                        <button
                            onClick={() => setActiveTab('events')}
                            className={`cursor-pointer py-[5px] w-full rounded-md ${activeTab === 'events' ? 'bg-white shadow' : ''}`}>
                            Events & Quizzes
                        </button>
                    </div>

                    {/* === Overview Tab Content === */}
                    {activeTab === 'overview' && (
                        <>
                            <div className='flex justify-center gap-2'>
                                <Ecard
                                    heading={'Next Lecture'}
                                    subline={'Today at 10:00 AM'}
                                    buttonText={'View Lecture Notes'}
                                />
                                <Ecard
                                    heading={'Recent Feedback'}
                                    subline={'Last 7 days'}
                                    buttonText={'View All Feedback'}
                                />
                                <Ecard
                                    heading={'Upcoming Events'}
                                    subline={'This Week'}
                                    buttonText={'Manage Events'}
                                />
                            </div>

                            <div className=' flex gap-2 justify-center mt-5'>
                                <div className='py-4'>
                                    <LectureAnalyticsCard />
                                </div>
                                <div>
                                    <SuggestionsCard />
                                </div>
                            </div>
                        </>
                    )}

                    {/* === Feedback Tab === */}
                    {activeTab === 'feedback' && (
                        <div>
                            <T_Feedback />
                        </div>
                    )}

                    {/* === Events Tab === */}
                    {activeTab === 'events' && (
                        <div>
                            <h2 className='text-xl font-semibold'>Events & Quizzes Section</h2>
                            {/* Your events content here */}
                            <T_events />
                        </div>
                    )}
                </div>
            </div>
        </>

    );
}

export default Tdashboard;
