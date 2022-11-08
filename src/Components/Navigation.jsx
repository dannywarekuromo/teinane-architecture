import React, { useState } from "react";
import menu from "../Assets/Images/png/001-menu.png";
import close from "../Assets/Images/png/002-close.png";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Navigation = () => {
  const [click, setClick] = useState(false);

  function CustomLLink({ to, children }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
      <li>
        <Link
          to={to}
          className={isActive ? "active" : ""}
          onClick={() => setClick(false)}>
          {children}
        </Link>
      </li>
    );
  }

  return (
    <nav className="nav">
      <Link to="/" className="services">
        DESIGN,ARCHITECTURE
      </Link>

      <Link to="/" className="logo-container">
        <h3>TE<i>INA</i>NE</h3> {/*Logo image is best suited */}
      </Link>

      <ul className={click ? "nav-list mobile-menu" : "nav-list"}>
        <CustomLLink to="/Projects">Projects</CustomLLink>
        <CustomLLink to="/About">About</CustomLLink>
        <CustomLLink to="/Contact">Contact</CustomLLink>
      </ul> 

      <button
        className="mobile-nav"
        onClick={() => {
          setClick(!click);
        }}
      >
        <img src={click ? close : menu} alt="mobile-nav" />
      </button>
    </nav>
  );
};

export default Navigation;
