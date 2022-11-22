import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Feature.css";

const Feature = () => {
  const [hover, setHover] = useState(true);

  return (
    <section className="feature">
      <div className="feature-wrapper">
        <div className="feature-items">
          <p>item 1</p>
        </div>
        <div className="feature-items">
          <p>item 2</p>
        </div>
        <div className="feature-items">
          <p>item 3</p>
        </div>
        <div className="feature-items">
          <p>item 4</p>
        </div>
      </div>
      <div className="feature-cta">
        <Link to="/Projects" className={hover ? " " : "feature-hover"} 
        onMouseEnter={() => { setHover(!hover) }}
        onMouseLeave={() => { setHover(!hover) }}>All Projects</Link>
      </div>
    </section>
  );
};

export default Feature;
