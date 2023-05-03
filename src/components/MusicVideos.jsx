import React from 'react';

const MusicVideos = () => {
  return (
    <div className="flex items-center justify-center bg-[#000000]">
      <div className="w-full sm:w-[90%] md:w-[80%] relative" style={{ paddingBottom: '56.25%', paddingTop: '0' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/6caGGHI8jNI?start=9&controls=0&showinfo=0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default MusicVideos;
