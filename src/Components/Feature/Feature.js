import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../ProjectCard/ProjectCard";
import Interior from "../../Assets/Images/Project-Image (12).jpg";
import Structure from "../../Assets/Images/Project-Image (2).png";
import "./Feature.css";

const Feature = () => {
  return (
    <section className="feature">
      <div className="feature-container">
        <div className="feature-index-1">
          <img src={Interior} alt="interior-design" />
          <ProjectCard
            cardImage="image-1"
            titleOne="Minima:"
            titleTwo="Home Away"
            index="1"
          />
        </div>
        <div className="feature-index-2">
          <img src={Structure} alt="interior-design" />
          <ProjectCard
            cardImage="image-2"
            titleOne="Minima:"
            titleTwo="Home Away"
            index="2"
            projectIndex="styled-index"
            cardContext="styled-context"
          />
        </div>
        <div className="feature-index-3">
          <ProjectCard
            cardImage="image-3"
            titleOne="Minima:"
            titleTwo="Home Away"
            index="3"
          />
        </div>
        <div>
          <ProjectCard
            cardImage="image-4"
            titleOne="Minima:"
            titleTwo="Home Away"
            index="4"
            projectIndex="styled-index"
            cardContext="styled-context"
          />
        </div>
      </div>
      <div className="feature-cta">
        <Link to="/Projects">All Projects {/* && Direction Icon*/}</Link>
      </div>
    </section>
  );
};

export default Feature;
