import React from "react";
import "./Info.css";
import { Link } from "react-router-dom";

const Info = () => {
  function InfoCard(props) {
    return (
      <div className="info-card">
        <ul className="info-title">
          <li className="info-item">{props.title}</li>
        </ul>
        <p className="info-digit">{props.digit}</p>
        <p className="info-text">{props.text}</p>
      </div>
    );
  }

  return (
    <section id="info">
      <div className="info-container">
        <h1 className="info-header">
          We champion <br />
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
          digit="10"
          text="Established in the year 2012, in the midst of the great architectural decay."
        />
        <InfoCard
          title="Completed Projects"
          digit="68"
          text="Uncompromising on quality, customer satisfaction is paramount."
        />
        <InfoCard
          title="Winning Awards"
          digit="14"
          text="Over a dozen awards to our name, our work does the talking. Always."
        />
      </div>
    </section>
  );
};

export default Info;
