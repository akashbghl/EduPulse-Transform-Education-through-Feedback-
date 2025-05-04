import React from 'react';

const suggestions = [
  {
    title: 'Incorporate more interactive activities.',
    body: 'It would be helpful to have more hands-on exercises during lectures.',
    time: '2h ago'
  },
  {
    title: 'Provide real-world examples.',
    body: 'Connecting concepts to industry applications would make them easier to understand.',
    time: '5h ago'
  },
  {
    title: 'Slow down during complex topics.',
    body: 'Some concepts need more time to digest, especially normalization and transactions.',
    time: '1d ago'
  }
];

const SuggestionsCard = () => {
  return (
    <div className="my-4 w-full h-108  p-6 bg-white dark:bg-gray-900 rounded-lg shadow border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-1">Suggestions from Students</h2>
      <p className="text-sm text-gray-500 mb-4">Anonymous feedback to improve your teaching</p>

      <div className="space-y-3">
        {suggestions.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700"
          >
            <div className="flex justify-between mb-1">
              <p className="font-medium text-sm">{item.title}</p>
              <span className="text-xs text-gray-400">{item.time}</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestionsCard;
