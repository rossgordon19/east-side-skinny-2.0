import React from 'react';
import Flextopia from '../../src/assets/flextopia.jpg';

const Logo = () => {
  return (
    <div className='bg-[#000000] text-[#f5f5f7] w-full h-full flex justify-center items-center'>
      <img src={Flextopia} className='w-full h-full md:w-[50%] md:h-[50%]' alt="Flextopia Records Logo" />
    </div>
  );
};

export default Logo;
