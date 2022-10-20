import React from 'react';
import './Hero.css';
import Video from '../Assets/Videos/hero-video (3).mp4';


export default function Hero() {
    return (
        <section id="hero">
        <div className="hero-container">
          <h1 className="value-text">
            Fine blend of texture
            <br />
            and progressive structure.
          </h1>
          <div className="services">
            <p>Architecture</p>
            <p>Interior</p>
            <p>Landscape</p>
            <p>Survey</p>
          </div>
        </div>
        <div className="hero-video">
            <video src={Video} autoPlay /**loop */ muted/>
        </div>
      </section>
    )
}