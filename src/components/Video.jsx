import React from 'react';
import Sky from '../assets/sky.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faSpotify, faYoutube, faSoundcloud } from '@fortawesome/free-brands-svg-icons';

const Video = () => {
  return (
    <div name='listen' className="relative min-h-[50vh] brightness-50 saturate-50 flex justify-center items-center text-center sm:text-left -mt-0.5">
      <video className="absolute top-0 left-0 w-full h-full object-cover border-none" autoPlay loop muted playsInline>
        <source src={Sky} type="video/mp4" />
      </video>
      <div className="z-10 flex flex-col items-center space-y-4">
        <h1 className="text-[#f5f5f7] text-2xl md:text-4xl font-bold tracking-[0.85em]">Richmond, VA</h1>
        <div className="flex flex-row justify-center space-x-4">
          <a href="https://music.apple.com/us/artist/skinny-v/1559103897" target="_blank" rel="noopener noreferrer" className="px-2 py-1 rounded-lg text-[#f5f5f7] hover:text-[#0a0908]">
            <FontAwesomeIcon icon={faApple} size="3x" />
          </a>
          <a href="https://open.spotify.com/artist/0gZ63VH2VhWqZJggnawo79" target="_blank" rel="noopener noreferrer" className="px-2 py-1 rounded-lg text-[#f5f5f7] hover:text-[#0a0908]">
            <FontAwesomeIcon icon={faSpotify} size="3x" />
          </a>
          <a href="https://www.youtube.com/channel/UCHgiq9lrZSisbDZn-BJqjUw" target="_blank" rel="noopener noreferrer" className="px-2 py-1 rounded-lg text-[#f5f5f7] hover:text-[#0a0908]">
            <FontAwesomeIcon icon={faYoutube} size="3x" />
          </a>
          <a href="https://soundcloud.com/eastsideskinnyv" target="_blank" rel="noopener noreferrer" className="px-2 py-1 rounded-lg text-[#f5f5f7] hover:text-[#0a0908]">
            <FontAwesomeIcon icon={faSoundcloud} size="3x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Video;
