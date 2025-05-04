import React from 'react';

const Card = ({ icon, title, description }) => {
  return (
    <div className=" mx-2 p-6 bg-white dark:bg-gray-900 rounded-xl border-1 border-[#dddddd] text-center">
      <div className="flex justify-center items-center w-12 h-12 mx-auto mb-4 bg-gray-100 dark:bg-gray-800 rounded-full">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

export default Card;
