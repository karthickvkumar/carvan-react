import React from 'react';
import Footer from '../componenets/Footer';
import Header from '../componenets/Header';

 function Home() {
  
  const homePage = require("../img/homepage-banner-image-1920x700.jpg");
  return (
    <div>
      <Header></Header>
      <section className="banner" id="top" style={{backgroundImage: `url(${homePage})`}}>
        <div className ="container">
            <div className ="row">
                <div className ="col-md-10 col-md-offset-1">
                    <div className ="banner-caption">
                        <div className ="line-dec"></div>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
                        <div className ="blue-button">
                            <a href="contact.html">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

      <main>
         <section className ="our-services">
            <div className ="container">
                <div className ="row">
                    <div className ="col-md-7">
                        <div className ="left-content">
                            <br/>
                            <h4>About us</h4>
                            <p>Aenean hendrerit metus leo, quis viverra purus condimentum nec. Pellentesque a sem semper, lobortis mauris non, varius urna. Quisque sodales purus eu tellus fringilla.<br/><br/>Mauris sit amet quam congue, pulvinar urna et, congue diam. Suspendisse eu lorem massa. Integer sit amet posuere tellus, id efficitur leo. In hac habitasse platea dictumst. Vel sequi odit similique repudiandae ipsum iste, quidem tenetur id impedit, eaque et, aliquam quod.</p>
                            <div className ="blue-button">
                                <a href="about-us.html">Discover More</a>
                            </div>

                            <br/>
                        </div>
                    </div>
                    <div className ="col-md-5">
                        <img src={require("../img/about-1-720x480.jpg")} className="img-fluid user-img" alt=""/>
                    </div>
                </div>
            </div>
        </section>

        <section className ="featured-places">
            <div className ="container">
                <div className ="row">
                    <div className ="col-md-12">
                        <div className ="section-heading">
                            <span>Featured Cars</span>
                            <h2>Lorem ipsum dolor sit amet ctetur.</h2>
                        </div>
                    </div> 
                </div> 
                <div className ="row">
                    <div className ="col-md-4 col-sm-6 col-xs-12">
                        <div className ="featured-item">
                            <div className ="thumb">
                                <div className ="thumb-img">
                                    <img src={require("../img/product-1-720x480.jpg")} alt=""/>
                                </div>
                                <div className ="overlay-content">
                                  <strong><i className ="fa fa-dashboard"></i> 130 000km</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                                  <strong><i className ="fa fa-cube"></i> 1800 cc</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                                  <strong><i className ="fa fa-cog"></i> Manual</strong>
                                </div>
                            </div>
                            <div className="down-content">
                                <h4>Lorem ipsum dolor sit amet, consectetur</h4>

                                <br/>

                                <p>190 hp  /  Petrol  /  2008  /  Used vehicle</p>

                                <p><span><del><sup>$</sup>11999.00 </del> <strong><sup>$</sup>11779.00</strong></span></p>

                                <div className="text-button">
                                    <a href="car-details.html">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className ="col-md-4 col-sm-6 col-xs-12">
                        <div className ="featured-item">
                            <div className ="thumb">
                                <div className ="thumb-img">
                                    <img src={require("../img/product-2-720x480.jpg")} alt=""/>
                                </div>
                                <div className ="overlay-content">
                                  <strong><i className ="fa fa-dashboard"></i> 130 000km</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                                  <strong><i className ="fa fa-cube"></i> 1800 cc</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                                  <strong><i className ="fa fa-cog"></i> Manual</strong>
                                </div>
                            </div>
                            <div className ="down-content">
                                <h4>Lorem ipsum dolor sit amet, consectetur</h4>

                                <br/>

                                <p>190 hp  /  Petrol  /  2008  /  Used vehicle</p>

                                <p><span><del><sup>$</sup>11999.00 </del> <strong><sup>$</sup>11779.00</strong></span></p>

                                <div className ="text-button">
                                    <a href="car-details.html">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className ="col-md-4 col-sm-6 col-xs-12">
                        <div className ="featured-item">
                            <div className ="thumb">
                                <div className ="thumb-img">
                                    <img src={require("../img/product-3-720x480.jpg")} alt=""/>
                                </div>
                                <div className ="overlay-content">
                                  <strong><i className ="fa fa-dashboard"></i> 130 000km</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                                  <strong><i className ="fa fa-cube"></i> 1800 cc</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                                  <strong><i className ="fa fa-cog"></i> Manual</strong>
                                </div>
                            </div>
                            <div className ="down-content">
                                <h4>Lorem ipsum dolor sit amet, consectetur</h4>

                                <br/>

                                <p>190 hp  /  Petrol  /  2008  /  Used vehicle</p>

                                <p><span><del><sup>$</sup>11999.00 </del> <strong><sup>$</sup>11779.00</strong></span></p>

                                <div className ="text-button">
                                    <a href="car-details.html">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className ="col-md-4 col-sm-6 col-xs-12">
                        <div className ="featured-item">
                            <div className ="thumb">
                                <div className ="thumb-img">
                                    <img src={require("../img/product-4-720x480.jpg")} alt=""/>
                                </div>
                                <div className ="overlay-content">
                                  <strong><i className ="fa fa-dashboard"></i> 130 000km</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                                  <strong><i className ="fa fa-cube"></i> 1800 cc</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                                  <strong><i className ="fa fa-cog"></i> Manual</strong>
                                </div>
                            </div>
                            <div className ="down-content">
                                <h4>Lorem ipsum dolor sit amet, consectetur</h4>

                                <br/>

                                <p>190 hp  /  Petrol  /  2008  /  Used vehicle</p>

                                <p><span><del><sup>$</sup>11999.00 </del> <strong><sup>$</sup>11779.00</strong></span></p>

                                <div className ="text-button">
                                    <a href="car-details.html">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className ="col-md-4 col-sm-6 col-xs-12">
                        <div className ="featured-item">
                            <div className ="thumb">
                                <div className ="thumb-img">
                                    <img src={require("../img/product-5-720x480.jpg")} alt=""/>
                                </div>
                                <div className ="overlay-content">
                                  <strong><i className ="fa fa-dashboard"></i> 130 000km</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                                  <strong><i className ="fa fa-cube"></i> 1800 cc</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                                  <strong><i className ="fa fa-cog"></i> Manual</strong>
                                </div>
                            </div>
                            <div className ="down-content">
                                <h4>Lorem ipsum dolor sit amet, consectetur</h4>

                                <br/>

                                <p>190 hp  /  Petrol  /  2008  /  Used vehicle</p>

                                <p><span><del><sup>$</sup>11999.00 </del> <strong><sup>$</sup>11779.00</strong></span></p>

                                <div className ="text-button">
                                    <a href="car-details.html">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className ="col-md-4 col-sm-6 col-xs-12">
                        <div className ="featured-item">
                            <div className ="thumb">
                                <div className ="thumb-img">
                                    <img src={require("../img/product-6-720x480.jpg")} alt=""/>
                                </div>
                                <div className ="overlay-content">
                                  <strong><i className ="fa fa-dashboard"></i> 130 000km</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                                  <strong><i className ="fa fa-cube"></i> 1800 cc</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                                  <strong><i className ="fa fa-cog"></i> Manual</strong>
                                </div>
                            </div>
                            <div className ="down-content">
                                <h4>Lorem ipsum dolor sit amet, consectetur</h4>

                                <br/>

                                <p>190 hp  /  Petrol  /  2008  /  Used vehicle</p>

                                <p><span><del><sup>$</sup>11999.00 </del> <strong><sup>$</sup>11779.00</strong></span></p>

                                <div className ="text-button">
                                    <a href="car-details.html">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className ="featured-places">
            <div className ="container">
                <div className ="row">
                    <div className ="col-md-12">
                        <div className ="section-heading">
                            <span>Latest blog posts</span>
                            <h2>Lorem ipsum dolor sit amet ctetur.</h2>
                        </div>
                    </div> 
                </div> 
                <div className ="row">
                    <div className ="col-md-4 col-sm-6 col-xs-12">
                        <div className ="featured-item">
                            <div className ="thumb">
                                <div className ="thumb-img">
                                    <img src={require("../img/blog-1-720x480.jpg")} alt=""/>
                                </div>

                                <div className ="overlay-content">
                                 <strong title="Author"><i className ="fa fa-user"></i> John Doe</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                                 <strong title="Posted on"><i className ="fa fa-calendar"></i> 12/06/2020 10:30</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                                 <strong title="Views"><i className ="fa fa-map-marker"></i> 115</strong>
                                </div>
                            </div>

                            <div className ="down-content">
                                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit hic</h4>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim consectetur assumenda nam facere voluptatibus totam veritatis. </p>

                                <div className ="text-button">
                                    <a href="blog-details.html">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className ="col-md-4 col-sm-6 col-xs-12">
                        <div className ="featured-item">
                            <div className ="thumb">
                                <div className ="thumb-img">
                                    <img src={require("../img/blog-2-720x480.jpg")} alt=""/>
                                </div>

                                <div className ="overlay-content">
                                 <strong title="Author"><i className ="fa fa-user"></i> John Doe</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                                 <strong title="Posted on"><i className ="fa fa-calendar"></i> 12/06/2020 10:30</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                                 <strong title="Views"><i className ="fa fa-map-marker"></i> 115</strong>
                                </div>
                            </div>

                            <div className ="down-content">
                                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit hic</h4>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim consectetur assumenda nam facere voluptatibus totam veritatis. </p>

                                <div className ="text-button">
                                    <a href="blog-details.html">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className ="col-md-4 col-sm-6 col-xs-12">
                        <div className ="featured-item">
                            <div className ="thumb">
                                <div className ="thumb-img">
                                    <img src={require("../img/blog-3-720x480.jpg")} alt=""/>
                                </div>

                                <div className ="overlay-content">
                                 <strong title="Author"><i className ="fa fa-user"></i> John Doe</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                                 <strong title="Posted on"><i className ="fa fa-calendar"></i> 12/06/2020 10:30</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                                 <strong title="Views"><i className ="fa fa-map-marker"></i> 115</strong>
                                </div>
                            </div>

                            <div className ="down-content">
                                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit hic</h4>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim consectetur assumenda nam facere voluptatibus totam veritatis. </p>

                                <div className ="text-button">
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="video-container">
            <div className ="video-overlay"></div>
            <div className ="video-content">
                <div className ="inner">
                      <div className ="section-heading">
                          <span>Contact Us</span>
                          <h2>Vivamus nec vehicula felis</h2>
                      </div>
                      

                      <div className ="blue-button">
                        <a href="#">Talk to us</a>
                      </div>
                </div>
            </div>
        </section>
    </main>
      <Footer></Footer>

 </div>
  )
}
export default Home;