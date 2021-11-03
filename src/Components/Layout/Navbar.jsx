import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { Link } from 'gatsby';
import './Navbar.css';
import NavbarData from '../../Assets/NavbarData';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu} >
                    <h1>RECIPE<span>APP</span></h1>
                </Link>

                {/* RESPONSIVE ICONS */}
                <div className='menu-icon' onClick={handleClick} >
                    {click ? <FaTimes className={'fa-bars'} /> : <GiHamburgerMenu className={'fa-bars'} />}
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    {
                        NavbarData.map((value, index) => (
                            <li className='nav-item' key={index}>
                                <Link to={value.link} className='nav-links' onClick={closeMobileMenu}>{value.title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </>
    );
}
export default Navbar;