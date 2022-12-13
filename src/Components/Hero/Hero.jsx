import React from 'react'
import "./Hero.css";

const Hero = () => {
  
  return (

    <section className='hero' data-scroll-section >
      <div className='heading-wrapper' data-scroll>
        <h1 className='hero-heading'>Teinane</h1>
        <p className='hero-text'>Walk that talk, creativity is our language.</p>
      </div>
      <div className='hero-img-wrapper'/>
      <div className='hero-value-wrapper'>
        <p className='hero-value'>
          We are at the forefront <br/>of spatial design, where<br/> imagination meets concrete.
        </p>
      </div>
    </section>
  )
}

export default Hero
