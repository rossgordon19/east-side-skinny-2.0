import React from 'react';
import backgroundImage from '../assets/hero.png';
import svFront from '../assets/svFront2.png';

const Hero = () => {
  return (
    <div name="home" className="relative h-screen">
      {/* background img */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-gray-900 opacity-50 sm:px-4 md:px-8 lg:px-16"></div>
      </div>
      <div className="relative z-10 flex flex-col sm:flex-row h-full px-4 sm:px-6 lg:px-8 items-center justify-center">
        {/* img container */}
        <div className="flex justify-center items-center sm:w-1/2 h-full">
          <img
            src={svFront}
            alt="SV Front"
            className="object-cover object-center h-64 w-64 lg:h-96 lg:w-96 scale-125 lg:scale-150 sm:mb-0 md:mb-0"
          />
        </div>
        <div className="flex flex-col items-center justify-center sm:w-1/2 h-full">
          <a
            href="https://music.apple.com/us/artist/skinny-v/1559103897"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden"
          >
            <button className="bg-[#f5f5f7] text-[#0a0908] font-bold text-2xl py-6 px-16 rounded-lg focus:outline-none focus:shadow-outline sm:translate-y-150">
              Listen Now
            </button>
          </a>
          <a
            href="https://music.apple.com/us/artist/skinny-v/1559103897"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex sm:items-center sm:justify-center"
          >
            <button
              id="al"
              aria-label="Listen Now"
              className="bg-[#f5f5f7] hover:bg-[#0a0908] hover:text-[#f5f5f7] hover:border border-white text-[#0a0908] font-bold text-2xl py-6 px-16 rounded-lg focus:outline-none focus:shadow-outline"
            >
              Listen Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
