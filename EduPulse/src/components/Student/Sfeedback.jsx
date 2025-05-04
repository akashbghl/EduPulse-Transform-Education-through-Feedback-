import React, { useEffect, useState } from 'react';
import SimpleCard from '../simple_ReusableComponents/SimpleCard';
import { Link } from 'react-router-dom';

function Sfeedback() {
  const [teachers, setTeachers] = useState([]);
  const [selectedTeacherEmail, setSelectedTeacherEmail] = useState('');
  const [rating, setRating] = useState(3);
  const [comment, setComment] = useState('');

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const teachersOnly = users.filter(user => user.role === 'teacher');
    setTeachers(teachersOnly);
  }, []);

  const handleSubmitFeedback = () => {
    if (!selectedTeacherEmail) {
      alert("Please select a teacher");
      return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    users = users.map(user => {
      if (user.email === selectedTeacherEmail && user.role === 'teacher') {
        const prevRating = user.rating ?? 0;
        const prevCount = user.ratingCount ?? 0;

        const totalRating = prevRating * prevCount + Number(rating);
        const newCount = prevCount + 1;
        const newRating = totalRating / newCount;

        return {
          ...user,
          rating: newRating,
          ratingCount: newCount,
        };
      }
      return user;
    });

    localStorage.setItem('users', JSON.stringify(users));
    alert('Feedback submitted!');
    setRating(3);
    setSelectedTeacherEmail('');
    setComment('');
  };

  return (
    <div className='my-6'>
      <SimpleCard
        cardContent={
          <div className='text-left'>
            <h1 className='text-2xl font-semibold'>Provide Feedback</h1>
            <p className='text-slate-800'>Your feedback is anonymous and helps teachers improve their lectures</p>

            <div className='my-4'>
              <label>Select Teacher</label>
              <select
                value={selectedTeacherEmail}
                onChange={(e) => setSelectedTeacherEmail(e.target.value)}
                className='border p-2 rounded-md w-full'
              >
                <option value="">Select a teacher</option>
                {teachers.map((teacher) => (
                  <option key={teacher.email} value={teacher.email}>{teacher.name}</option>
                ))}
              </select>
            </div>

            <div className='mt-4'>
              <label>Overall Rating (1-5)</label>
              <div className='flex gap-2 mt-2'>
                {[1, 2, 3, 4, 5].map(num => (
                  <div
                    key={num}
                    onClick={() => setRating(num)}
                    className={`rounded-full border-2 px-4 py-2 cursor-pointer ${rating === num ? 'bg-black text-white' : 'border-slate-800'}`}
                  >
                    {num}
                  </div>
                ))}
              </div>
            </div>

            <div className='mt-4'>
              <label>Additional Comments</label>
              <textarea
                className='w-full h-24 border border-slate-300 rounded-md p-2'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>

            <div className='flex justify-end mt-4'>
              <button
                onClick={handleSubmitFeedback}
                className='bg-black text-white py-2 px-8 rounded-md hover:bg-gray-800'
              >
                Submit Feedback
              </button>
            </div>

            <div className='mt-4 text-right'>
              <Link to='/rank' className='bg-black px-5 py-2 text-white rounded-md'>
                Check Teacher Ranks
              </Link>
            </div>
          </div>
        }
      />
    </div>
  );
}

export default Sfeedback;
