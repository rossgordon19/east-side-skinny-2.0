import React from 'react'
import Sky from '../assets/sky.mp4';

const Video = () => {
  return (
    <div className="relative min-h-[50vh] brightness-50 saturate-50 flex justify-center items-center text-center sm:text-left">
      <video className="absolute top-0 left-0 w-full h-full bg-video object-cover sm:object-none border-none" autoPlay loop muted playsInline>
        <source src={Sky} type="video/mp4" />
      </video>
      <h1 className="text-white text-2xl md:text-4xl font-bold tracking-[0.85em] z-10">Richmond,VA</h1>
    </div>
  )
}

export default Video
