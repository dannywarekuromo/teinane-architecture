import React from 'react';
import logo from '../Images/Teinane-1b1b1b.svg'

const  Navbar = () => {
    return(
       <nav className='nav'>
            <a href="/" className="logo-container">
                <img className="nav-logo" src={logo} alt="nav-logo" />
            </a>

            <ul className="nav-list">
                <CustomLLink href="/">Home</CustomLLink>
                <CustomLLink href="/About">About</CustomLLink>
                <CustomLLink href="/Projects">Projects</CustomLLink>
                <CustomLLink href="/Contact">Contact</CustomLLink>
                
            </ul>
       </nav> 
    );
}

function CustomLLink({ href, children, ...props}) {
    const pathName = "window.location.pathname";

    return (
        <li>
            <a href={href} className={pathName === href ? "active" : ""}>{children}</a>
        </li>
    )
}
export default Navbar;