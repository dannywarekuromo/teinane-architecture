import React from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import CaneBack from "../../Assets/Images/Project-Image (4).png";
import OceanFront from "../../Assets/Images/Project-Image (37).jpg";
import MinimoOptique from "../../Assets/Images/Project-Image (7).png";
import "./HeroFeature.css";

const HeroFeature = () => {
  //feature link 1
  const hoverReveal1 = () => {
    gsap.to(".tile-1", {
      width: "350px",
      opacity: 1
    });
  };
  const hoverCollapse1 = () => {
    gsap.to(".tile-1", {
      width: "0px",
      opacity: 0
    });
  }
  //feature link 2
  const hoverReveal2 = () => {
    gsap.to(".tile-2", {
      width: "350px",
      opacity: 1
    });
  };
  const hoverCollapse2 = () => {
    gsap.to(".tile-2", {
      width: "0px",
      opacity: 0
    });
  }
  //feature link 3
  const hoverReveal3 = () => {
    gsap.to(".tile-3", {
      width: "350px",
      opacity: 1
    });
  };
  const hoverCollapse3 = () => {
    gsap.to(".tile-3", {
      width: "0px",
      opacity: 0
    });
  }

  return (
    <section className="feature">
      <div className="feature-title">
        <p>featured projects</p>
      </div>
      <div className="feature-projects">
        <div className="feature-project-tile">
          <div className="feature-project-text">
            <Link
              className="feature-link cane-back-link"
              to="/CaneBack"
              onMouseEnter={hoverReveal1}
              onMouseLeave={hoverCollapse1}
            >
              Cane Back
            </Link>
            <p className="feature-desc">FURNITURE</p>
          </div>

          <div className="feature-img-container tile-1">
            <img className="feature-img" src={CaneBack} alt="Cane Back" />
          </div>
        </div>
        <div className="feature-project-tile">
          <div className="feature-project-text">
            <Link className="feature-link ocean-front-link" to="/OceanFront"
             onMouseEnter={hoverReveal2}
             onMouseLeave={hoverCollapse2}
            >
              Ocean Front
            </Link>
            <p className="feature-desc">ARCHITECTURE</p>
          </div>

          <div className="feature-img-container tile-2">
            <img className="feature-img" src={OceanFront} alt="Ocean Front" />
          </div>
        </div>
        <div className="feature-project-tile">
          <div className="feature-project-text">
            <Link className="feature-link" to="/MinimoOptique"
             onMouseEnter={hoverReveal3}
             onMouseLeave={hoverCollapse3}
            >
              Minimo Optique
            </Link>
            <p className="feature-desc">INTERIOR DESIGN</p>
          </div>

          <div className="feature-img-container tile-3">
            <img
              className="feature-img"
              src={MinimoOptique}
              alt="Minimo Optique"
            />
          </div>
        </div>
      </div>
      <div className="feature-cta-container">
        <Link className="feature-project-cta minimo-optique" to="/Projects">
          All Projects
        </Link>
        <svg
          className="feature-cta-svg"
          width="81"
          height="82"
          viewBox="0 0 81 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="79" x2="79" y2="80" stroke="#302727" stroke-width="2" />
          <line
            x1="80.0125"
            y1="79.9999"
            x2="0.0187504"
            y2="80.9998"
            stroke="#302727"
            stroke-width="2"
          />
          <line
            x1="78.8615"
            y1="79.2756"
            x2="22.293"
            y2="22.7071"
            stroke="#302727"
            stroke-width="2"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroFeature;
