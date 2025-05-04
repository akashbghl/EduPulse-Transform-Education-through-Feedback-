import React from 'react';
import { FaUsers, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const userTypes = [
  {
    id: 1,
    icon: <FaUsers size={24} className="text-blue-500" />,
    title: 'For Students',
    borderColor: 'border-blue-500',
    bgIconColor: 'bg-blue-100',
    buttonColor: 'bg-blue-500',
    hoverColor: 'hover:bg-blue-600',
    buttonText: 'Join as Student',
    features: [
      'Provide anonymous feedback',
      'Participate in events and quizzes',
      'Earn points and climb the leaderboard',
      'Redeem rewards with earned points',
    ],
  },
  {
    id: 2,
    icon: <FaArrowUp size={24} className="text-purple-600" />,
    title: 'For Teachers',
    borderColor: 'border-purple-600',
    bgIconColor: 'bg-purple-100',
    buttonColor: 'bg-purple-600',
    hoverColor: 'hover:bg-purple-700',
    buttonText: 'Join as Teacher',
    features: [
      'Receive anonymous student feedback',
      'Create and manage events and quizzes',
      'Track student engagement and performance',
      'Gain insights to improve teaching methods',
    ],
  },
];

function StuTeacher() {
  return (
    <div className=" min-h-screen p-10 flex flex-col items-center">
      <h1 className="font-bold text-4xl text-center">For Students & Teachers</h1>
      <p className="text-xl text-gray-500 text-center mt-2 mb-10">
        Tailored experiences for both students and educators
      </p>

      <div className="flex flex-col md:flex-row justify-center items-start gap-8 w-full max-w-6xl">
        {userTypes.map((user) => (
          <div key={user.id} className="flex-1 border rounded-lg shadow-md border-gray-200 bg-white">
            <div className={`border-t-6 rounded-t-lg p-6 ${user.borderColor}`}>
              <div className={`${user.bgIconColor} p-3 rounded-full w-fit mb-4`}>
                {user.icon}
              </div>
              <h2 className="font-bold text-xl mb-4">{user.title}</h2>
              <ul className="text-gray-600 space-y-2">
                {user.features.map((feature, index) => (
                  <li key={index}>✅ {feature}</li>
                ))}
              </ul>
            </div>
            <div className="p-6 pt-0">
              <Link to='/Signup'
                className={`block text-center w-full ${user.buttonColor} text-white font-semibold py-2 rounded-md ${user.hoverColor} transition`}
              >
                {user.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StuTeacher;
