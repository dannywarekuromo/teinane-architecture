import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" data-scroll-section>
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
        <Link to="/Contact" className="footer-cta">
          Get In Touch
        </Link>
        <svg
          width="81"
          height="82"
          viewBox="0 0 81 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="79" x2="79" y2="80" stroke="#E3DCC7" stroke-width="2" />
          <line
            x1="80.0125"
            y1="79.9999"
            x2="0.0187504"
            y2="80.9998"
            stroke="#E3DCC7"
            stroke-width="2"
          />
          <line
            x1="78.8615"
            y1="79.2756"
            x2="22.293"
            y2="22.7071"
            stroke="#E3DCC7"
            stroke-width="2"
          />
        </svg>
      </div>
      <div className="footer-nav">
        <div className="footer-year">
          <p>&copy;2020 TEINANE</p>
        </div>
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
