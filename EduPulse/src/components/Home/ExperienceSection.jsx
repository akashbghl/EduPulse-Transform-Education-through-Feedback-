import React from 'react';
import { Link } from 'react-router-dom';

function ExperienceSection() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-600 to-purple-500 py-10 px-4 flex flex-col items-center text-center text-white">
      <h2 className="text-4xl font-bold mb-4">
        Ready to transform your educational experience?
      </h2>
      <p className="text-md md:text-lg text-gray-200 max-w-2xl mb-8">
        Join thousands of students and teachers already using our platform to enhance learning and teaching.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Link to='/Signup'>
        <button className="bg-white cursor-pointer text-black font-semibold py-2 px-6 rounded-md shadow hover:bg-gray-200 transition">
          Get Started
        </button>
        </Link>
        <Link to='/contacts'>
        <button className="bg-white cursor-pointer text-black font-semibold py-2 px-6 rounded-md shadow hover:bg-gray-200 transition">
          Contact Sales
        </button>
        </Link>
      </div>
    </section>
  );
}

export default ExperienceSection;
