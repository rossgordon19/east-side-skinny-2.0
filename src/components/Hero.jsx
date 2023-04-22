import React from 'react';
import backgroundImage from '../assets/hero.png';
import svFront from '../assets/svFront2.png';

const Hero = () => {
  return (
    <div className="relative h-[80vh] md:h-screen w-screen">
      {/* The background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* The content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 h-full px-4 sm:px-6 lg:px-8">
        {/* The overlay */}
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        
        {/* The image container */}
        <div className="flex justify-center items-center md:absolute md:left-1/4 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
          {/* The image */}
          <img
            src={svFront}
            alt="SV Front"
            className="h-72 w-72 md:h-72 md:w-72 object-cover object-center scale-75 sm:h-42 sm:w-42 md:mb-0 sm:h-80 sm:w-80 sm:object-cover sm:object-center scale-125"
          />
        </div>

        {/* The content */}
        <div className="flex flex-col items-center justify-center md:absolute md:left-3/4 md:top-1/2 md:transform md:-translate-x-1/2 mb-[100px] lg:mt-[-145px]">
          {/* The text */}
          <h1 className="font-bold text-white text-center text-5xl md:text-7xl">
            Skinny V Archive
            <br />
            Vol. 1
          </h1>
          {/* The button */}
          <button className="mt-4 bg-white text-black border border-black py-3 px-6 rounded text-2xl hover:bg-black hover:text-white">
            Listen Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
