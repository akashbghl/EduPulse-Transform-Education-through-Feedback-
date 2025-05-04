import React from 'react';

const Ecard = ({ heading, subline, buttonText, children }) => {
  return (
    <div className="w-full max-w-sm p-5 bg-white dark:bg-gray-900 rounded-lg shadow border border-gray-200 dark:border-gray-700">
      <h2 className="text-lg font-semibold mb-1">{heading}</h2>
      <p className="text-sm text-gray-500 mb-3">{subline}</p>

      <div className="mb-4">{children}</div>

      <button className="cursor-pointer w-full border px-4 py-2 rounded text-sm font-medium border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">
        {buttonText}
      </button>
    </div>
  );
};

export default Ecard;
