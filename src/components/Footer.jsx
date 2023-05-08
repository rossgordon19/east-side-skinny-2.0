import React from 'react';
import { BsEnvelopeFill } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faSpotify, faYoutube, faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div name='contact' className="w-full h-[240px] bg-[#000000] text-[#f5f5f7] flex flex-col justify-center items-center">
      {/* Container */}
      <div className="font-bold">
        <p className="text-5xl mb-3 text-center">Contact</p>
        <div className="flex flex-wrap justify-center">
          {/* Email */}
          <a
            className="text-5xl hover:text-[#8D99AE] mx-4 my-2"
            href="mailto:rossagordonstl@gmail.com"
          >
            <BsEnvelopeFill />
          </a>

          {/* Instagram */}
          <a
            className="text-5xl hover:text-[#8D99AE] mx-4 my-2"
            href="https://www.instagram.com/eastsideskinny/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} className="flex-grow flex-shrink-0 flex" />
          </a>

          {/* Twitter */}
          <a
            className="text-5xl hover:text-[#8D99AE] mx-4 my-2"
            href="https://twitter.com/eastsideskinnyv"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} className="flex-grow flex-shrink-0 flex" />
          </a>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-white text-center mt-3">
        <p>&copy; 2023 Skinny V</p>
        <p><a href='https://www.instagram.com/flextopiarecords/' target='_blank'>Flextopia Records</a></p>
      </div>
    </div>
  );
};

export default Footer;
