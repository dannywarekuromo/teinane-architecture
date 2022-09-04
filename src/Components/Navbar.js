import React from 'react';
import logo from '../Images/Teinane-bg-1b1b1b.svg'

const  Navbar = () => {
    return(
       <nav className='nav'>
            <div className="logo-container">
                <img className="nav-logo" src={logo} alt="nav-logo" />
            </div>

            <ul className="nav-list">
                <li className="nav-item">
                    <a className="nav-link" href="#Home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#About">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Project">Project</a>
                </li>
            </ul>

            <div className="sign-in">
                <a href="#Sign-in">Sign In</a>
            </div>
       </nav> 
    );
}

export default Navbar;