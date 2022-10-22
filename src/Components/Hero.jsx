import React from "react";
import "./Hero.css";
import Video from "../Assets/Videos/hero-video (3).mp4";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-container">
        <h1 className="hero-header">
          Fine blend of texture
          <br />
          and progressive structure.
        </h1>
        <div className="hero-services">
          <p>Taking architecture through the extra mile <br/>
          to bring about new experiences in familiar ways.</p>
        </div>  
      </div>
      <div className="hero-video">
        <video src={Video} autoPlay /*loop */ muted />
      </div>
      
    </section>
  );
}

export default Hero;