import React from "react";
import { Link } from "react-router-dom";
import Architecture from "../Images/Architecture.png";
import Interior from "../Images/Interior.png";
import Furniture from "../Images/Furniture.png";
import Products from "../Images/Products.png";
import Search from "../Images/png/003-search.png";

function Layer() {
  return (
    <Link className="layer" to="/Projects">
      <div className="search-div">
        <img src={Search} alt="Search" className="service-search" />
      </div>
    </Link>
  );
}

export default function Services() {

  function Service(props) {
    return (
      <div className="service">
        <Layer />
        <h4 className="service-head">{props.head}</h4>
        <img src={props.source} alt={props.alternate} className="service-img" />
      </div>
    );
  }

  return (
    <section className="services">
      <Service head="Architecture" source={Architecture} alternate="Architecture"/>
      <Service head="Interior" source={Interior} alternate="Interior"/>
      <Service head="Furniture" source={Furniture} alternate="Furniture"/>
      <Service head="Products" source={Products} alternate="Products"/>
    </section>
  );
}
