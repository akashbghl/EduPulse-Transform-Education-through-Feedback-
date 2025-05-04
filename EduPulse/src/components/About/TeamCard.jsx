import React from 'react';

const TeamCard = ({ image, name, role, bio }) => {
  return (
    <div className="max-w-xs mx-2 p-6 bg-white dark:bg-gray-900 rounded-xl border-1 border-[#dddddd] shadow-md text-center">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 mx-auto mb-4 rounded-full object-cover bg-gray-200"
      />
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{bio}</p>
    </div>
  );
};

export default TeamCard;
