import React, { useState } from "react";
import menu from "../../Assets/Images/png/001-menu.png";
import close from "../../Assets/Images/png/002-close.png";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const [click, setClick] = useState(false);

  function CustomLLink({ to, children }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
      <li className="nav-item">
        <Link
          to={to}
          className={isActive ? "nav-link active" : "nav-link"}
          onClick={() => setClick(false)}
        >
          {children}
        </Link>
      </li>
    );
  }

  return (
    <header className="nav">
      <Link to="/" className="nav-services">
        Design, Architecture
      </Link>

      <nav>
        <ul className={click ? "nav-list menu-wrapper" : "nav-list"}>
          <CustomLLink to="/Projects">Projects</CustomLLink>
          <CustomLLink to="/About">About</CustomLLink>
          <CustomLLink to="/Contact">Contact</CustomLLink>
        </ul>
      </nav>
      
      <button
        className="ham-wrapper"
        onClick={() => {
          setClick(!click);
        }}
      >
        <img src={click ? close : menu} alt="hamburger-img" />
      </button>
    </header>
  );
};

export default Navigation;
