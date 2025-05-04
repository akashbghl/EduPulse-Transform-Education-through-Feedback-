import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFontAwesome } from 'react-icons/fa';

const HeroBanner = () => {
  const words = ['Engagement', 'Learning', 'Feedback', 'Growth', 'Success'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false); // Reset animation class
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setAnimate(true); // Reapply animation
      }, 100); // Short delay to retrigger animation
    }, 2000); // Change every 2s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-[17vh] flex flex-col items-center justify-center mx-auto bg-gradient-to-b from-[#eff6ff] to-white">
      <h1 className="text-black text-[9vh] font-bold">Transform Education Through</h1>

      <h1
        className={`text-[9vh] font-bold mb-2 transition-opacity duration-700 ease-in-out bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent ${
          animate ? 'opacity-100 animate-fade' : 'opacity-0'
        }`}
      >
        {words[currentWordIndex]}
      </h1>

      <p className="text-center text-gray-500 text-[20px] mb-2">
        A platform where students provide anonymous feedback and participate <br />
        in engaging activities to enhance the learning experience.
      </p>

      <div className="flex mt-4">
        <Link to='/signup' className="px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-purple-500 rounded-md">Get Started</Link>
        <Link to= '/demo'
        className="px-6 py-3 ml-4 border border-gray-300 rounded-md">Watch Demo</Link>
      </div>

      {/* Floating Icons */}
      <div className="relative w-1/2 h-[300px] bg-[#f8fbff] mt-8 overflow-hidden">
        <div className="absolute top-5 left-10 text-[#3366ff] bg-[#e3eeff] p-5 rounded-[12px] shadow-md animate-float">
          <i className="fas fa-bars"></i>
        </div>
        <div className="absolute top-[100px] left-1/2 text-[#9d4edd] bg-[#f0e9ff] p-5 rounded-full shadow-md animate-float delay-[200ms]">
          <i className="fas fa-bullseye"></i>
        </div>
        <div className="absolute top-5 right-[60px] text-[#00b894] bg-[#dfffea] p-5 rounded-[12px] shadow-md animate-float delay-[400ms]">
          <i className="fas fa-heartbeat"></i>
        </div>
        <div className="absolute bottom-10 left-[30%] text-[#e74c3c] bg-[#ffe0e0] p-5 rounded-[12px] shadow-md animate-float delay-[600ms]">
          <i className="fas fa-calendar-alt"></i>
        </div>
        <div className="absolute bottom-[60px] right-[120px] text-[#f39c12] bg-[#fff2d6] p-5 rounded-[12px] shadow-md animate-float delay-[800ms]">
          <i className="fas fa-award"></i>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
