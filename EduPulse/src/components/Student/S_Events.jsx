import React, { useState } from 'react';
import SimpleCard from '../simple_ReusableComponents/SimpleCard';
import { SlCalender } from 'react-icons/sl';
import { IoLocationOutline, IoTimeOutline } from 'react-icons/io5';

function S_Events() {
    const [activeTab, setActiveTab] = useState('upcoming');

    const upcomingEvents = [
        {
            heading: 'Coding Competition',
            points: '200 pts',
            subheading: 'Contest',
            eventDate: 'May 25, 2025',
            eventTime: '10:00 AM - 4:00 PM',
            location: 'Computer Lab 3',
            btnStatus: 'Register',
        },
        {
            heading: 'Web Development Bootcamp',
            points: '150 pts',
            subheading: 'Workshop',
            eventDate: 'June 10, 2025',
            eventTime: '12:00 PM - 3:00 PM',
            location: 'Auditorium Hall',
            btnStatus: 'Register',
        },
        {
            heading: 'Tech Talk: AI Trends',
            points: '100 pts',
            subheading: 'Seminar',
            eventDate: 'July 5, 2025',
            eventTime: '2:00 PM - 4:00 PM',
            location: 'Seminar Room A',
            btnStatus: 'Join',
        },
        {
            heading: 'Hackathon 2.0',
            points: '300 pts',
            subheading: 'Competition',
            eventDate: 'August 12, 2025',
            eventTime: '9:00 AM - 9:00 PM',
            location: 'Main Lab Block',
            btnStatus: 'Register',
        },
        {
            heading: 'UI/UX Design Challenge',
            points: '180 pts',
            subheading: 'Contest',
            eventDate: 'September 1, 2025',
            eventTime: '11:00 AM - 2:00 PM',
            location: 'Design Studio 2',
            btnStatus: 'Apply Now',
        },
    ];

    const registeredEvents = [
        {
            heading: 'Python Masterclass',
            points: '250 pts',
            subheading: 'Workshop',
            eventDate: 'May 5, 2025',
            eventTime: '1:00 PM - 5:00 PM',
            location: 'Lab 1',
            btnStatus: 'Registered',
        },
        {
            heading: 'Cybersecurity Basics',
            points: '180 pts',
            subheading: 'Seminar',
            eventDate: 'May 15, 2025',
            eventTime: '11:00 AM - 2:00 PM',
            location: 'Seminar Room B',
            btnStatus: 'Registered',
        },
    ];

    const pastEvents = [
        {
            heading: 'TechFest 2024',
            points: '300 pts',
            subheading: 'Festival',
            eventDate: 'December 20, 2024',
            eventTime: '10:00 AM - 6:00 PM',
            location: 'Campus Ground',
            btnStatus: 'Completed',
        },
        {
            heading: 'Data Structures Quiz',
            points: '120 pts',
            subheading: 'Contest',
            eventDate: 'January 18, 2025',
            eventTime: '2:00 PM - 3:00 PM',
            location: 'Lab 5',
            btnStatus: 'View Result',
        },
    ];

    const renderCards = (dataArray) => (
        <div className='flex gap-4 flex-wrap'>
            {dataArray.map((data, index) => (
                <div className='w-[24vw]' key={index}>
                    <SimpleCard
                        cardContent={
                            <div className='text-left'>
                                <div className='flex justify-between'>
                                    <h1>{data.heading}</h1>
                                    <button className='border-1 rounded-2xl text-xs px-3 font-bold'>{data.points}</button>
                                </div>
                                <p className='text-gray-600 text-[14px]'>{data.subheading}</p>
                                <p className='flex gap-2 items-center my-1 mt-4 text-[15px]'><SlCalender />{data.eventDate}</p>
                                <p className='flex gap-2 items-center my-1 text-[15px]'><IoTimeOutline />{data.eventTime}</p>
                                <p className='flex gap-2 items-center my-1 text-[15px]'><IoLocationOutline />{data.location}</p>
                                <button className='border-1 rounded-md my-2 w-full p-[3px] border-gray-300 text-gray-800 cursor-pointer hover:bg-gray-100'>{data.btnStatus}</button>
                            </div>
                        }
                    />
                </div>
            ))}
        </div>
    );

    return (
        <div>
            <div className='w-full flex px-1 py-[5px] bg-[#f6f3f3] gap-2 my-5 rounded-md items-center text-center'>
                <button
                    onClick={() => setActiveTab('upcoming')}
                    className={`cursor-pointer w-full rounded-md ${activeTab === 'upcoming' ? 'bg-white py-[5px] shadow' : ''}`}>
                    Upcoming
                </button>
                <button
                    onClick={() => setActiveTab('registered')}
                    className={`cursor-pointer w-full rounded-md ${activeTab === 'registered' ? 'bg-white py-[5px] shadow' : ''}`}>
                    Registered
                </button>
                <button
                    onClick={() => setActiveTab('p_events')}
                    className={`cursor-pointer w-full rounded-md ${activeTab === 'p_events' ? 'bg-white py-[5px] shadow' : ''}`}>
                    Past Events
                </button>
            </div>

            {activeTab === 'upcoming' && renderCards(upcomingEvents)}
            {activeTab === 'registered' && renderCards(registeredEvents)}
            {activeTab === 'p_events' && renderCards(pastEvents)}
        </div>
    );
}

export default S_Events;
