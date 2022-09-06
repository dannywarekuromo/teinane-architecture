import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  function Service({ children, image }) {
    return (
      <div className="service">
        <div className="service-layer"></div>
        <h3 className="service-head">{children}</h3>
        <div className="service-iamge"></div>
      </div>
    );
  }
  return (
    <div className="services">
      <Service>Architecture</Service>
      <Service>Interior</Service>
      <Service>Furniture</Service>
      <Service>Products</Service>
    </div>
  );
}
