import React from 'react'
import {NavLink} from "react-router-dom";

 function Header() {

    const logo = require("../img/logo.png");

  return (
    <div className="wrap">
        <header id="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <button id="primary-nav-button" type="button">Menu</button>
                        <NavLink to="/">
                            <div className="logo">
                                <img src={logo} alt="Venue Logo"/>
                            </div>
                        </NavLink>

                        <nav id="primary-nav" className="dropdown cf">
                            <ul className="dropdown menu">
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/AboutUs">About Us</NavLink></li>
                                <li><NavLink to="/Brands">Brands</NavLink></li>
                                <li><NavLink to="/RangeofCars">Range of Cars</NavLink></li>
                                <li><NavLink to="/PreownedCars">PreOwned Cars</NavLink></li>
                                <li><NavLink to="/ContactUs">Contact Us</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    </div>
  )
}
export default Header;