import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../../src/hamburgers.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { BsEnvelopeFill } from 'react-icons/bs';

const Navbar = () => {
  // navbar toggle
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="sticky top-0 z-50 w-full h-[80px] flex items-center px-4 bg-[#000000] text-[#f5f5f7]">
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
        <h1 className="font-bold text-5xl mb-2 lg:mb-0">Skinny V</h1>
      </div>

      {/* Hamburger Menu */}
      <div
        onClick={handleClick}
        className="md:hidden z-10 flex justify-end w-full"
      >
        {!nav ? (
          <button className="hamburger hamburger-vortex" type="button">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        ) : (
          <button
            className="hamburger hamburger--vortex is-active"
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
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
        <li className="py-6 text-5xl hover:scale-110 cursor-pointer transform transition">
          <Link to="home" smooth={true} duration={500} onClick={handleClick}>
            Home
          </Link>
        </li>
        <li className="py-6 text-5xl hover:scale-110 cursor-pointer transform transition">
          <Link to="listen" smooth={true} duration={500} onClick={handleClick}>
            Listen
          </Link>
        </li>
        <li className="py-6 text-5xl hover:scale-110 cursor-pointer transform transition">
          <Link to="contact" smooth={true} duration={500} onClick={handleClick}>
            Contact
          </Link>
        </li>
        <li className="flex space-x-4 mt-4">
          <a href="https://www.instagram.com/eastsideskinny/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://twitter.com/eastsideskinnyv" target="_blank">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="mailto:eastsideskinnyv@gmail.com">
            <BsEnvelopeFill size={48} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
