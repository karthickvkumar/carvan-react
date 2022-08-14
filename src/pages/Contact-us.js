import React from 'react'
import Footer from '../componenets/Footer';
import Header from '../componenets/Header';

 function ContactUs() {
    const bannerImg = require("../img/banner-image-3-1920x300.jpg");

  return (
    <div>
      <Header></Header>
      <section className="banner banner-secondary" id="top" style={{backgroundImage : `url(${bannerImg})`}}>
        <div className ="container">
            <div className ="row">
                <div className ="col-md-10 col-md-offset-1">
                    <div className ="banner-caption">
                        <div className ="line-dec"></div>
                        <h2>Contact Us</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <main>
        <section className ="popular-places">
            <div className ="container">
                <div className ="contact-content">
                    <div className ="row">
                        <div className ="col-md-8"> 
                            <div className ="left-content">
                                <div className ="row">
                                    <div className ="col-md-6">
                                      <fieldset>
                                        <input name="name" type="text" className ="form-control" id="name" placeholder="Your name..." required=""/>
                                      </fieldset>
                                    </div>
                                     <div className ="col-md-6">
                                      <fieldset>
                                        <input name="subject" type="text" className="form-control" id="subject" placeholder="Subject..." required=""/>
                                      </fieldset>
                                    </div>
                                    <div className ="col-md-12">
                                      <fieldset>
                                        <textarea name="message" rows="6" className ="form-control" id="message" placeholder="Your message..." required=""></textarea>
                                      </fieldset>
                                    </div>
                                    <div className ="col-md-12">
                                      <fieldset>
                                        <div className ="blue-button">
                                            <a href="#" id="form-submit" className ="btn">Send Message</a>
                                        </div>
                                      </fieldset>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className ="col-md-4">
                            <div className ="right-content">
                                <div className ="row">
                                    <div className ="col-md-12">
                                        <div className ="content"> 
                                            <p>Etiam viverra nibh at lorem hendrerit porta non nec ligula. Donec hendrerit porttitor pretium.</p>
                                            <ul>
                                                <li><span>Phone:</span><a href="#">+1 333 4040 5566</a></li>
                                                <li><span>Email:</span><a href="#">contact@company.com</a></li>
                                                <li><span>Address:</span><i className ="fa fa-map-marker"></i> 212 Barrington Court New York</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>      
                </div>
            </div>
        </section>
    </main>

      <Footer></Footer>
    </div>
  )
}
export default ContactUs;