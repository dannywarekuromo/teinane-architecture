import React from "react";
import Logo from "../Assets/Images/Teinane-dbdbdb.svg";
import {Link} from "react-router-dom";

const Footer = () => {
    function FooterNav() {
        return(
            <div className="footer-list">
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Projects</Link>
                <Link to="/">Contact Us</Link>
            </div>
        )
    }
    return (
        <footer>
            <Link to="/">
                <img src={Logo} alt="Logo-footer"/>
            </Link>
            <FooterNav />
            <div className="disclaimer">&copy; United Kingdom 2020. All Rights Reserved.</div>
        </footer>
    )
}

export default Footer;