import React from 'react';
import backgroundImage from '../assets/hero.png';
import svFront from '../assets/svFront2.png';
import { Link } from 'react-scroll';

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
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 h-full px-4 sm:px-6 lg:px-8">
        {/* img container */}
        <div className="flex justify-center items-center md:absolute md:left-1/4 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
          <img
            src={svFront}
            alt="SV Front"
            className="object-cover object-center md:mb-0 sm:object-cover sm:object-center h-64 w-64 lg:h-96 lg:w-96 scale-125"
          />
        </div>
        <div className="flex flex-col items-center justify-center md:absolute md:left-3/4 md:top-1/2 md:transform md:-translate-x-1/2 lg:translate-y-[100px]">
          <button className="hidden sm:block bg-[#f5f5f7] hover:bg-[#0a0908] hover:text-[#f5f5f7] transform -translate-y-[150px] text-[#0a0908] font-bold text-2xl py-6 px-16 rounded-lg focus:outline-none focus:shadow-outline">
            <Link to="listen" smooth={true} duration={500}>
              Listen Now
            </Link>
          </button>
          <button className="sm:hidden bg-[#f5f5f7] hover:bg-[#0a0908] hover:text-[#f5f5f7] transform -translate-y-[150px] text-[#0a0908] font-bold text-2xl py-6 px-16 rounded-lg focus:outline-none focus:shadow-outline">
            <Link to="listen" smooth={true} duration={500}>
              Listen Now
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
