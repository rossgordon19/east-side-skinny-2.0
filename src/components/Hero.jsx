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

      {/* The image container */}
      <div className="absolute inset-0 flex justify-center items-center md:justify-start">
        {/* The image */}
        <div className="flex flex-col justify-center items-center mt-[-300px] sm:mt-0 md:absolute md:left-1/4 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 sm:left-1/2 sm:top-1/4">
          <img
            src={svFront}
            alt="SV Front"
            className="h-72 w-72 md:h-72 md:w-72 object-cover object-center scale-75 md:scale-150 sm:h-42 sm:w-42 md:mb-0 sm:h-80 sm:w-80 sm:object-cover sm:object-center sm:scale-125"
          />
        </div>
      </div>

      {/* The content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 sm:px-6 lg:px-8">
        {/* The overlay */}
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        {/* The content */}
        <div className="absolute left-1/2 top-0 md:top-1/2 md:-translate-y-1/2 transform -translate-x-1/2 md:left-3/4 md:top-1/2 md:-translate-x-1/2 mt-[200px] sm:mt-0">
          {/* The text and button container */}
          <div className="flex flex-col items-center md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 mt-12 md:mt-0">
            {/* The text */}
            <h1 className="font-bold text-white leading-tight text-center text-5xl md:text-7xl mt-[75px] sm:mt-0">
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
    </div>
  );
};

export default Hero;
