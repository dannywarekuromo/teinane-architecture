import React from "react";
import { Link } from "react-router-dom";
import Architecture from "../Images/Architecture.png";
import Interior from "../Images/Interior.png";
import Furniture from "../Images/Furniture.png";
import Products from "../Images/Products.png";
import Search from "../Images/png/003-search.png";

export default function Services() {
  function Layer() {
    return (
      <div className="layer">
        <Link to="/Projects">
          <img src={Search} alt="Search" className="service-search" />
        </Link>
      </div>
    );
  }

  function Service({ children, image }) {
    return (
      <div className="service">
        <Layer />
        <h4 className="service-head">{children}</h4>
      </div>
    );
  }

  return (
    <section className="services">
      <Service>
        Architecture
        <img src={Architecture} alt="Architecture" className="service-img" />
      </Service>
      <Service>
        Interior
        <img src={Interior} alt="Interior" className="service-img" />
      </Service>
      <Service>
        Furniture
        <img src={Furniture} alt="Furniture" className="service-img" />
      </Service>
      <Service>
        Products
        <img src={Products} alt="Products" className="service-img" />
      </Service>
    </section>
  );
}
