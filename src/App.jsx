import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Video from './components/Video';
import Footer from './components/Footer';
import MusicVideos from './components/MusicVideos';
import Logo from './components/Logo';

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Video />
      <Logo />
      <MusicVideos />
      <Footer />
    </div>
  )
}

export default App
