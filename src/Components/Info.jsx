import React from "react";
import InfoCard from "./InfoCard";
import "./Info.css";
import { Link } from "react-router-dom";

const Info = () => {

  return (
    <section id="info">
      <div className="info-container">
        <h1 className="info-header">
          We leverage<br />
          the eccentric to achieve <br />
          the extraordinaire
        </h1>
        <Link to="/About" className="info-cta">
          Know More
        </Link>
      </div>
      <div className="info-card-container">
        <InfoCard
          title="Years Experience"
          desc="7"
          text="Established in the year 2012, in the midst of the great architectural decay."
        />
        <InfoCard
          title="Completed Projects"
          desc="45"
          text="Over three dozen contracts to our name, our work does the talking."
        />
        <InfoCard
          title="Quality Assurance"
          desc="110%"
          text="Uncompromising on quality, customer satisfaction is paramount."
        />
      </div>
    </section>
  );
};

export default Info;
