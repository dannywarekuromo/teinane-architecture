import React, { useState } from "react";
import menu from "../Images/png/001-menu.png";
import close from "../Images/png/002-close.png";
import "./Navigation.css";
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
      <Link to="/" className="logo-container">
        <p className="nav-logo">Teinane</p>
      </Link>

      <ul className={click ? "nav-list mobile-menu" : "nav-list"}>
        <CustomLLink to="/">Home</CustomLLink>
        <CustomLLink to="/About">About</CustomLLink>
        <CustomLLink to="/Projects">Projects</CustomLLink>
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
