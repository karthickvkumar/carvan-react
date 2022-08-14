import React from 'react'

 function Footer() {
    const logo = require("../img/logo.png");

  return (
    <footer>
    <div className="container">
        <div className="row">
            <div className="col-md-5">
                <div className="about-veno">
                    <div className="logo">
                        <img src={logo} alt="Venue Logo"/>
                    </div>
                    <p>Mauris sit amet quam congue, pulvinar urna et, congue diam. Suspendisse eu lorem massa. Integer sit amet posuere tellustea dictumst.</p>
                    <ul className="social-icons">
                        <li>
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-linkedin"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-md-4">
                <div className="useful-links">
                    <div className="footer-heading">
                        <h4>Useful Links</h4>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <ul>
                                <li><a href="inde.html"><i className="fa fa-stop"></i>Home</a></li>
                                <li><a href="about.html"><i className="fa fa-stop"></i>About</a></li>
                                <li><a href="team.html"><i className="fa fa-stop"></i>Team</a></li>
                                <li><a href="contact.html"><i className="fa fa-stop"></i>Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <li><a href="faq.html"><i className="fa fa-stop"></i>FAQ</a></li>
                                <li><a href="testimonials.html"><i className="fa fa-stop"></i>Testimonials</a></li>
                                <li><a href="blog.html"><i className="fa fa-stop"></i>Blog</a></li>
                                <li><a href="terms.html"><i className="fa fa-stop"></i>Terms</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="contact-info">
                    <div className="footer-heading">
                        <h4>Contact Information</h4>
                    </div>
                    <p><i className="fa fa-map-marker"></i> 212 Barrington Court New York, ABC</p>
                    <ul>
                        <li><span>Phone:</span><a href="#">+1 333 4040 5566</a></li>
                        <li><span>Email:</span><a href="#">contact@company.com</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>

  )
}
export default Footer;