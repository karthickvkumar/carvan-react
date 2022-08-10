import React from 'react'
import {NavLink} from "react-router-dom";

 function Header() {
  return (
    <div className="wrap">
        <header id="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <button id="primary-nav-button" type="button">Menu</button>
                        <a href="index.html"><div className="logo">
                            <img src="img/logo.png" alt="Venue Logo"/>
                        </div></a>
                        <nav id="primary-nav" className="dropdown cf">
                            <ul className="dropdown menu">
                                <li className='active'><a href="index.html">Home</a></li>

                                <li><a href="cars.html">Cars</a></li>

                                <li>
                                    <a href="#">About</a>
                                    <ul className="sub-menu">
                                        <li><a href="about-us.html">About Us</a></li>
                                        <li><a href="blog.html">Blog</a></li>
                                        <li><a href="team.html">Team</a></li>
                                        <li><a href="testimonials.html">Testimonials</a></li>
                                        <li><a href="faq.html">FAQ</a></li>
                                        <li><a href="terms.html">Terms</a></li>
                                    </ul>
                                </li>

                                <li><a className="nav-link" href="contact.html">Contact Us</a></li>
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