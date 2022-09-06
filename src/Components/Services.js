import React from "react";
import { Link } from "react-router-dom";
import Architecture from "../Images/Architecture.jpg";
import Interior from "../Images/Interior.jpg";
import Furniture from "../Images/Furniture.jpg";
import Products from "../Images/Products.jpg";

export default function Services() {
  function Service({ children, image }) {
    return (
      <Link to="/Projects" className="service">
        <h3 className="service-head">{children}</h3>
      </Link>
    );
  }
  return (
    <div className="services">
      <Service>
        Architecture
        <div className="service-iamge">
          <img src={Architecture} alt="Architecture" />
        </div>
      </Service>
      <Service>
        Interior
        <div>
          <img src={Interior} alt="Interior" />
        </div>
      </Service>
      <Service>
        Furniture
        <div>
          <img src={Furniture} alt="Furniture" />
        </div>
      </Service>
      <Service>
        Products
        <div>
          <img src={Products} alt="Products" />
        </div>
      </Service>
    </div>
  );
}
