import React from 'react';
import logo from '../Images/Teinane-1b1b1b.svg'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const  Navbar = () => {
    return(
       <nav className='nav'>
            <Link to="/" className="logo-container">
                <img className="nav-logo" src={logo} alt="nav-logo" />
            </Link>

            <ul className="nav-list">
                <CustomLLink to="/">Home</CustomLLink>
                <CustomLLink to="/About">About</CustomLLink>
                <CustomLLink to="/Projects">Projects</CustomLLink>
                <CustomLLink to="/Contact">Contact</CustomLLink>
                
            </ul>
       </nav> 
    );
}

function CustomLLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li>
            <Link to={to} className = {isActive ? "active" : ""}>{children}</Link>
        </li>
    )
}
export default Navbar;