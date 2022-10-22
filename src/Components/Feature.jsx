import React from "react";
import "./Feature.css";
import minimo from "../Assets/Images/Minimo.jpg";

const Feature = () => {
  function FeatureCard(props) {
    return (
      <div className="feature-card">
        <ul className="feature-title">
          <li className="feature-item">{props.title}</li>
        </ul>
        <p className="feature-desc">{props.desc}</p>
        <p className="feature-text">{props.text}</p>
      </div>
    );
  }

  return (
    <section id="feature">
      <div className="feature-container">
        <div className="feature-img-container">
          <img src={minimo} alt="furniture-project" />
        </div>
        <div className="feature-card-container">
          <FeatureCard
            title="Featured Project"
            desc="Minimo: Home Away"
            text="An ultra-modern pad, designed with the classic minimal aesthetic, showcasing sentiments of individual pieces."
          /> 
          {/*Add Previous and Next Buttons for secondary interaction*/}
        </div>
      </div>
    </section>
  );
};

export default Feature;
