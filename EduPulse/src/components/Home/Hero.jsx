import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const directions = ['left', 'right', 'top', 'bottom', 'top-left', 'bottom-right'];

const HeroBanner = () => {
    const words = ['Engagement', 'Learning', 'Feedback', 'Growth', 'Success'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const wordInterval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000);

        const imageInterval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % directions.length);
        }, 5000); // Change image every 5 seconds

        return () => {
            clearInterval(wordInterval);
            clearInterval(imageInterval);
        };
    }, []);

    return (
        <div className="relative pt-[17vh] flex flex-col items-center justify-center mx-auto bg-gradient-to-b from-[#eff6ff] to-white overflow-hidden min-h-[100vh]">

            {/* One Image at a Time with Directional Animation */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img
                    key={currentImageIndex}
                    src={`/images/bg${currentImageIndex + 1}.jpg`}
                    alt={`bg-${currentImageIndex}`}
                    className={`absolute w-full h-full object-cover animate-loop-${directions[currentImageIndex]}`}
                    style={{
                        animationDelay: `${currentImageIndex * 6}s`,
                        animationDuration: '10s',
                        opacity: 0.6
                    }}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10" />
            </div>

            {/* Foreground Content */}
            <div className="z-10 text-center">
                <h1 className="text-white text-[9vh] font-bold">Transform Education Through</h1>
                <h1
                    className="text-[9vh] font-bold mb-2 transition-opacity duration-700 ease-in-out bg-gradient-to-r from-green-600 via-orange-500 to-blue-500 bg-clip-text text-transparent"
                >
                    {words[currentWordIndex]}
                </h1>
                <p className="text-center text-white text-[20px] mb-2">
                    A platform where students provide anonymous feedback and participate <br />
                    in engaging activities to enhance the learning experience.
                </p>

                <div className="flex mt-4 justify-center">
                    <Link to='/signup' className="px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-purple-500 rounded-md">Get Started</Link>
                    <Link to='/demo' className="px-6 py-3 ml-4 border text-white border-gray-300 rounded-md">Watch Demo</Link>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
