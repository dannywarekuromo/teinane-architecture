import React from 'react'
import "./Hero.css";

const Hero = () => {
  
  return (

    <section className='hero'>
      <div className='heading-wrapper'>
        <h1 className='hero-heading'>Teinane</h1>
      </div>
      <div className='hero-img-wrapper'/>
      <div className='hero-value-wrapper'>
        <p className='hero-value'>
          We are at the forefront <br/>of spatial design, where<br/> imagination meets concrete.
        </p>
        <p className='hero-text'>Walk that talk, creativity is our language.</p>
      </div>
    </section>
  )
}

export default Hero
