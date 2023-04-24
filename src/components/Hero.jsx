import React from 'react';
import backgroundImage from '../assets/hero.png';
import svFront from '../assets/svFront2.png';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div name='home' className="relative h-[80vh]">
      {/* background img */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      </div>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 h-full px-4 sm:px-6 lg:px-8">        
        {/* img container */}
        <div className="flex justify-center items-center md:absolute md:left-1/4 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
          <img
            src={svFront}
            alt="SV Front"
            className="object-cover object-center md:mb-0 sm:object-cover sm:object-center h-64 w-64 scale-125"
          />
        </div>
        <div className="flex flex-col items-center justify-center md:absolute md:left-3/4 md:top-1/2 md:transform md:-translate-x-1/2 mb-[10px] lg:mt-[-155px]">
          <h1 className="font-bold text-white text-center text-5xl md:text-7xl">
            Skinny V Archive
            <br />
            Vol. 1
          </h1>
          <button className="mt-4 bg-white text-black border border-black py-3 px-6 rounded text-2xl hover:bg-black hover:text-white">
            <Link
            to='listen'
            smooth={true}
            duration={500}
            >
              Listen Now
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
