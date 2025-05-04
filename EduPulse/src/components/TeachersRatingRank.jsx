import React, { useEffect, useState } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

function TeachersRatingRank() {
  const [teachersData, setTeachersData] = useState([]);

  const loadTeachers = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const teachers = storedUsers.filter(user => user.role === 'teacher');
    setTeachersData(teachers);
  };

  useEffect(() => {
    loadTeachers(); // Initial load

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        loadTeachers(); // Refresh on tab focus
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  const sortedTeachers = [...teachersData].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating || 0);
    const hasHalfStar = (rating || 0) - fullStars >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }
    while (stars.length < 5) {
      stars.push(<FaRegStar key={`empty-${stars.length}`} className="text-gray-400" />);
    }
    return stars;
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Top Rated Teachers</h2>
      {sortedTeachers.length === 0 ? (
        <p className="text-center text-gray-500">No teachers found.</p>
      ) : (
        <div className="space-y-4">
          {sortedTeachers.map((teacher, index) => (
            <div
              key={teacher.email}
              className="flex items-center justify-between bg-gray-50 rounded-lg p-4 hover:shadow"
            >
              <div className="flex items-center gap-4">
                <div className="text-lg font-semibold">{index + 1}.</div>
                <div>
                  <div className="text-md font-bold text-gray-800">{teacher.name}</div>
                  <div className="flex">{renderStars(teacher.rating)}</div>
                  <div className="text-sm text-gray-600">
                    {teacher.ratingCount ?? 0} student{teacher.ratingCount !== 1 && 's'} rated
                  </div>
                </div>
              </div>
              <div className="text-md font-semibold text-gray-600">
                {teacher.rating != null ? teacher.rating.toFixed(1) + ' / 5' : 'Not Rated Yet'}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TeachersRatingRank;
