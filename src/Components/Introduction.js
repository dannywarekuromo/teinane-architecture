import React from "react";
import Intromage from "./Images/Introduction.jpg";
import { Link } from "react-router-dom";

export default function Introduction() {

  return (
    <>
      <IntroHead />
      <seciton className="introduction">
        <div className="intro-text">
          <h4>ABOUT TEINANE</h4>
          <p>
            The studio was started with the idea of bringing daring and
            unorthodox style designs in the architecture space at face-value
            identifying the gems among the better ignored designs and incoperate
            them together creating a cutting edge modern design in every
            project.
          </p>
          <h5 className="intro-link">
            <Link to="./About">KNOW MORE</Link>
          </h5>
        </div>
        <div className="intro-img">
          <img src={Intromage} alt="intro" />
        </div>
      </seciton>
    </>
  );

  function IntroHead() {
    return(
      <div className="intro-head">
        <h2>ECCENTRIC</h2>
        <h2>MINIMAL</h2>
        <h2>EXPERTISE</h2>
      </div>
    )
  }
}
