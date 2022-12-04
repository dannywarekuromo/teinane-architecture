import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const [hover, setHover] = useState(true);

  return (
    <footer className="footer" data-scroll-section >
      <div className="footer-addr-wrapper">
        <p className="footer-addr">
          Based in London, working worldwide <br />
          GT Local Time: Tue 1:03 pm
        </p>
      </div>
      <div className="sitemap-social-wrapper">
        <div className="footer-sitemap">
          <div className="sitemap-header">
            <p>Sitemap</p>
          </div>
          <Link to="/">Home</Link>
          <Link to="/Project">Project</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
        </div>
        <div className="footer-social">
          <div className="social-header">
            <p>Social</p>
          </div>
          <Link to="/">LinkedIn</Link>
          <Link to="/Project">Twitter</Link>
          <Link to="/Contact">Instagram</Link>
          <Link to="/About">Facebook</Link>
        </div>
      </div>
      <div className="footer-contact-wrapper">
        <Link
          to="/Contact" className={hover ? " " : "on-hover"}
          onMouseEnter={ () => {setHover(!hover) }}
          onMouseLeave={ () => {setHover(!hover) }}>
          Get in touch
        </Link>
      </div>
      <div className="footer-nav">
        <div className="footer-year"><p>&copy;2020 TEINANE</p></div>
        <div className="footer-t-c">
          <Link to="/">Term of Use</Link>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">License</Link>
        </div>
        <div className="footer-translation">
          <Link to="/">English</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
