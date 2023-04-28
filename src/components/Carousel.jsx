import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import '../../src/carouselCustomStyles.css';
import Upsidedown from '../assets/upsidedown.jpeg';
import Upsidedown2 from '../assets/upsidedown2.jpeg'
import Headshot from '../assets/headshot.jpeg'

const carouselContent = [
  {
    id: 1,
    src: Upsidedown,
    alt: 'Slide 1',
  },
  {
    id: 2,
    src: Upsidedown2,
    alt: 'Slide 2',
  },
  {
    id: 3,
    src: Headshot,
    alt: 'Slide 3',
  },
]

const Carousel = () => {
  return (
    <div className='h-screen w-full'>
      <AwesomeSlider
        className='h-full w-full custom-slider'
        style={{
          '--slider-background-color': 'var(--tw-bg-red-500)',
        }}
        bullets={false}
      >
        {carouselContent.map((slide) => (
          <div key={slide.id} className='custom-slide'>
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </AwesomeSlider>
      <div className='custom-slider-nav'>
        {carouselContent.map((slide, index) => (
          <button
            key={slide.id}
            className={`mx-1 w-4 h-4 bg-white rounded-full focus:outline-none ${
              index === 0 ? 'opacity-100' : 'opacity-50'
            }`}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default Carousel
