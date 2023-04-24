import React from 'react'
import City from '../assets/building.mp4'

const Video = () => {
  return (
    <div className="relative h-[50vh] brightness-50 saturate-50 flex justify-center items-center">
      <video className="absolute top-0 left-0 w-full h-full object-cover bg-video" autoPlay loop muted>
        <source src={City} type="video/mp4" />
      </video>
      <h1 className="text-white text-5xl font-bold text-center tracking-[0.85em] z-10">Text goes here</h1>
    </div>
  )
}

export default Video
