import React from "react";
import InfoCard from "./InfoCard";
import "./Feature.css";
import minimo from "../Assets/Images/Minimo.jpg";

const Feature = () => {

  return (
    <section id="feature">
      <div className="feature-container">
        <div className="feature-img-container">
          <img src={minimo} alt="furniture-project" />
        </div>
        <div className="feature-card-container">
          <InfoCard
            title="Featured Project"
            desc="Minimo: Home Away"
            text="An ultra-modern pad, designed with the classic minimal aesthetic, showcasing sentiments of individual pieces."
            infoCard="feature-card"
            infoTitle="feature-title"
            infoItem="feature-item"
            infoDesc="feature-desc"
            infoText="feature-text"
          />
          {/*Add Previous and Next Buttons for secondary interaction*/}
        </div>
      </div>
    </section>
  );
};

export default Feature;
