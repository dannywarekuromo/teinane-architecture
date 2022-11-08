import React from "react";
import Video from "../../Assets/Videos/hero-video (3).mp4";
import "./Hero.css"

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-container">
        <h1 className="hero-header">
          TE<i>INA</i>NE
        </h1>
      </div>
      <div className="hero-video">
        <video src={Video} autoPlay /*loop */ muted />
      </div>
      <div className="hero-services">
          <div className="hero-statement">
            <p>
              We are taking architecture the extra mile
              to bring about invaluable experiences beyond our primary senses.
            </p>
          </div>
          <div className="established">
            <p className="est-year">&copy; 2020</p>
            <p className="est-address">
              SUITE 3a, 143<sup>RD</sup> OPP STREET, EAST LONDON, UK<br/>
              PRIVACY POLICY | TERM OF USE | COOKIE POLICY
            </p>
            <p></p>
          </div>
        </div>

      <div className="intro-container">
        <div className="hero-about">
          <h3 >
            At Te<i>ina</i>ne, we exist <br/>
            to ideate, create and vis<i>ual</i>ise a fine blend <br/>of texture &
            str<i>uct</i>ure.
          </h3>
        </div>
        <div className="hero-about-context">
          <p>
            Think of it like a new perception of reality - wondrous environments
            intended to push boundaries and transfix those who experience it.
            Our in-house team led by contemporary designer and leader in spatial
            design Jesse Warekuromo, are highly capable to bring your designs
            one step closer to reality through the use of 3D architectural
            visualizations, motion design, creative direction and what more is
            required to manifest the intended experience.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
