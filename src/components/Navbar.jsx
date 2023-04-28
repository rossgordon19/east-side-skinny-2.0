import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = () => {
  // navbar toggle
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="sticky top-0 z-50 w-full h-[80px] flex items-center px-4 bg-[#0a0908] text-[#f5f5f7]">
      {/* Navbar */}
      <ul className="hidden md:flex space-x-4 text-2xl">
        <li className="hover:underline">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li className="hover:underline">
          <Link to="listen" smooth={true} duration={500}>
            Listen
          </Link>
        </li>

        <li className="hover:underline">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div className="absolute left-1/2 transform -translate-x-1/2 text-xl">
        <h1 className="font-bold text-5xl">Skinny V</h1>
      </div>

      {/* Hamburger Menu */}
      <div
        onClick={handleClick}
        className="md:hidden z-10 flex justify-end w-full"
      >
        {!nav ? (
          <AiOutlineMenu className="cursor-pointer" />
        ) : (
          <AiOutlineClose className="cursor-pointer" />
        )}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute text-2xl top-0 left-0 w-full h-screen bg-[#000000] text-[#fff] flex flex-col justify-center items-center'
        }
      >
        <li className="py-6 text-5xl hover:underline">
          <Link to="home" smooth={true} duration={500} onClick={handleClick}>
            Home
          </Link>
        </li>
        <li className="py-6 text-5xl hover:underline">
          <Link to="listen" smooth={true} duration={500} onClick={handleClick}>
            Listen
          </Link>
        </li>
        <li className="py-6 text-5xl hover:underline">
          <Link to="contact" smooth={true} duration={500} onClick={handleClick}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
