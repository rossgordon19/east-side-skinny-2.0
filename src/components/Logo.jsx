import React from 'react';
import Flextopia from '../../src/assets/flextopia.jpg';

const Logo = () => {
  return (
    <div className='bg-[#000000] text-[#f5f5f7] w-full h-full flex justify-center items-center'>
      <img src={Flextopia} className='w-[65%] h-[65%]' alt="Flextopia Records Logo" />
    </div>
  );
};

export default Logo;
