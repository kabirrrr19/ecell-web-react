import React from 'react'
import "./Esummit.css"
import Hero from './Hero/Hero.js'
import About from './About/About.js'
import Spealer from './Speakers/Speakers.js'
import Speakers from './Speakers/Speakers.js'
import Schedule from './Schedule/Schedule'
import Gallery from './Gallery/Gallery'
import Sponsors from './Sponsors/Sponsors.js'

export default function Esummit() {
  return (
    <div>
      <Hero />
      <About />
      <Speakers />
      <Schedule />
      {/* <Gallery /> */}
      <Sponsors />
    </div>
  )
}
