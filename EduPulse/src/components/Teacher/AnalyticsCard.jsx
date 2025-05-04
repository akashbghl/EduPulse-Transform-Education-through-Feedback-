import React from 'react';
import Graph from '../../assets/graph.png'

const LectureAnalyticsCard = () => {
  return (
    <div className=" p-6 bg-white dark:bg-gray-900 rounded-lg shadow border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-1">Lecture Analytics</h2>
      <p className="text-sm text-gray-500 mb-4">
        Student engagement and comprehension
      </p>

      {/* buttons */}
      <div className="flex w-full mb-4 rounded overflow-hidden border border-gray-200 dark:border-gray-700">
        <button className="flex-1 py-2 bg-gray-100 dark:bg-gray-800 text-sm font-medium text-center">
          Engagement
        </button>
        <button className="flex-1 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 text-center">
          Comprehension
        </button>
      </div>
      
      {/* graph */}
      <div className="mb-4">
        <img src={Graph} alt="Graph" className="w-full object-contain" />
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-300">
        Student engagement has increased by <strong>35%</strong> over the past 6 weeks
      </p>
    </div>
  );
};

export default LectureAnalyticsCard;
