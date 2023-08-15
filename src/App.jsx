import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Video from './components/Video';
import Footer from './components/Footer';
import MusicVideo from './components/MusicVideos';
import Logo from './components/Logo';

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Video />
      <Logo />
      <MusicVideo />
      <Footer />
    </div>
  )
}

export default App
