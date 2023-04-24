import React from 'react'
import Sky from '../assets/sky.mp4';

const Video = () => {
  return (
    <div className="relative h-[50vh] brightness-50 saturate-50 flex justify-center items-center">
      <video className="absolute top-0 left-0 w-full h-full bg-video object-cover sm:object-none" autoPlay loop muted>
        <source src={Sky} type="video/mp4" />
      </video>
      <h1 className="text-white text-5xl font-bold text-center tracking-[0.85em] z-10">Richmond, VA</h1>
    </div>
  )
}

export default Video
