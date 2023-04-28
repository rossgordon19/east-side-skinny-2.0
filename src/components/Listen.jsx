import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faSpotify, faYoutube, faSoundcloud } from '@fortawesome/free-brands-svg-icons';

const Listen = () => {
  return (
    <div name='listen' className="bg-[#0a0908] text-[#f5f5f7] h-[50vh] w-full flex flex-col justify-center items-center">
      <h1 className="text-5xl text-center">Now Streaming on All Platforms</h1>
      <div className="flex flex-row justify-center mt-4 space-x-4">
        <a href="https://music.apple.com/us/artist/skinny-v/1559103897" target="_blank" rel="noopener noreferrer" className="hover:text-black hover:bg-gray-200 px-2 py-1 rounded-lg">
          <FontAwesomeIcon icon={faApple} size="3x" />
        </a>
        <a href="https://open.spotify.com/artist/0gZ63VH2VhWqZJggnawo79" target="_blank" rel="noopener noreferrer" className="hover:text-black hover:bg-gray-200 px-2 py-1 rounded-lg">
          <FontAwesomeIcon icon={faSpotify} size="3x" />
        </a>
        <a href="https://www.youtube.com/channel/UCHgiq9lrZSisbDZn-BJqjUw" target="_blank" rel="noopener noreferrer" className="hover:text-black hover:bg-gray-200 px-2 py-1 rounded-lg">
          <FontAwesomeIcon icon={faYoutube} size="3x" />
        </a>
        <a href="https://soundcloud.com/eastsideskinnyv" target="_blank" rel="noopener noreferrer" className="hover:text-black hover:bg-gray-200 px-2 py-1 rounded-lg">
          <FontAwesomeIcon icon={faSoundcloud} size="3x" />
        </a>
      </div>
    </div>
  );
};

export default Listen;
