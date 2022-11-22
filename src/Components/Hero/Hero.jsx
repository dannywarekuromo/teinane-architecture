import React from 'react'
import background from "../../Assets/Images/Project-Image (11).jpg";
import "./Hero.css";

const Hero = () => {
  
  return (

    <section className='hero'>
      <div className='heading-wrapper'>
        <h1 className='hero-heading'>Teinane</h1>
      </div>
      <div className='hero-img-wrapper' style={{
        backgroundImage: `url(${background})`
      }}>
        <p className='hero-text'>Walk that talk, creativity is our language <br/>quality assurance is our work.</p>
      </div>
      <div className='hero-value-wrapper'>
        <p className='hero-value'>
          We are at the forefront <br/>of spatial design, where<br/> imagination meets concrete.
        </p>
      </div>
    </section>
  )
}

export default Hero
