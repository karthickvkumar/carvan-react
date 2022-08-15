import React from 'react';
import Header from '../componenets/Header';
import Footer from '../componenets/Footer';

const PreOwnedDetails = () => {
  const bannerImg = require("../img/blog-image-fullscren-1-1920x700.jpg");

  return (
    <div>
      <Header></Header>
      <section className="banner banner-secondary" id="top" style={{backgroundImage : `url(${bannerImg})`}}>
        <div className ="container">
            <div className ="row">
                <div className ="col-md-10 col-md-offset-1">
                    <div className ="banner-caption">
                        <div className ="line-dec"></div>
                        <h2>Pre-Owned Car Details</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
      <main>
      <section className ="featured-places">
            <div className ="container">
                <div className ="row">
                    
                <main>
        <section class="featured-places">
            <div class="container">
               <div class="row">
                  <div class="col-md-6 col-xs-12">
                    <div>
                      <img src={require("../img/product-1-720x480.jpg")} alt="" class="img-responsive wc-image"/>
                    </div>
                    
                  </div>

                  <div class="col-md-6 col-xs-12">
                    <form action="#" method="post" class="form">
                      <h2><small><del> $11999.00</del></small><strong class="text-primary">$11779.00</strong></h2>

                      <br/> 

                      <ul class="list-group list-group-flush">
                       <li class="list-group-item">
                            <div class="clearfix">
                                 <span class="pull-left">Type</span>

                                 <strong class="pull-right">Used vehicle</strong>
                            </div>
                       </li>

                       <li class="list-group-item">
                            <div class="clearfix">
                                 <span class="pull-left"> Model</span>

                                 <strong class="pull-right">Lorem ipsum dolor sit</strong>
                            </div>
                       </li>

                       <li class="list-group-item">
                            <div class="clearfix">
                                 <span class="pull-left">First registration</span>

                                 <strong class="pull-right">05/2010</strong>
                            </div>
                       </li>

                       <li class="list-group-item">
                            <div class="clearfix">
                                 <span class="pull-left">Mileage</span>

                                 <strong class="pull-right">5000 km</strong>
                            </div>
                       </li>

                       <li class="list-group-item">
                            <div class="clearfix">
                                 <span class="pull-left">Fuel</span>

                                 <strong class="pull-right">Diesel</strong>
                            </div>
                       </li>

                       <li class="list-group-item">
                            <div class="clearfix">
                                 <span class="pull-left">Engine size</span>

                                 <strong class="pull-right">1800 cc</strong>
                            </div>
                       </li>

                       <li class="list-group-item">
                            <div class="clearfix">
                                 <span class="pull-left">Power</span>

                                 <strong class="pull-right">85 hp</strong>
                            </div>
                       </li>


                       <li class="list-group-item">
                            <div class="clearfix">
                                 <span class="pull-left">Gearbox</span>

                                 <strong class="pull-right">Manual</strong>
                            </div>
                       </li>

                       <li class="list-group-item">
                            <div class="clearfix">
                                 <span class="pull-left">Number of seats</span>

                                 <strong class="pull-right">4</strong>
                            </div>
                       </li>

                       <li class="list-group-item">
                            <div class="clearfix">
                                 <span class="pull-left">Doors</span>

                                 <strong class="pull-right">2/3</strong>
                            </div>
                       </li>

                       <li class="list-group-item">
                            <div class="clearfix">
                                 <span class="pull-left">Color</span>

                                 <strong class="pull-right">Black</strong>
                            </div>
                       </li>
                    </ul>


                    

                      <div class="accordions">
                            <ul class="accordion">
                                <li>
                                    <a class="accordion-trigger">Vehicle Extras</a>
                                    
                                    <div class="accordion-content" style={{display: 'block'}}>
                                        <div class="row">
                                            <div class="col-sm-6 col-xs-12">
                                                <p>ABS</p>
                                            </div>

                                            <div class="col-sm-6 col-xs-12">
                                                <p>Leather seats</p>
                                            </div>

                                            <div class="col-sm-6 col-xs-12">
                                                <p>Power Assisted Steering</p>
                                            </div>

                                            <div class="col-sm-6 col-xs-12">
                                                <p>Electric heated seats</p>
                                            </div>

                                            <div class="col-sm-6 col-xs-12">
                                                <p>New HU and AU</p>
                                            </div>

                                            <div class="col-sm-6 col-xs-12">
                                                <p>Xenon headlights</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                
                                <li>
                                    <a class="accordion-trigger">Contact Details</a>

                                    <div class="accordion-content" style={{display: 'block'}}>

                                      <p>
                                        <span>Name</span>

                                        <br/>

                                        <strong>John Smith</strong>

                                    </p>

                                    <p>
                                        <span>Phone</span>

                                        <br/>
                                        
                                        <strong>
                                          <a href="tel:123-456-789">123-456-789</a>
                                        </strong>
                                    </p>

                                    <p>
                                        <span>Mobile phone</span>

                                        <br/>
                                        
                                        <strong>
                                          <a href="tel:456789123">456789123</a>
                                        </strong>
                                    </p>

                                    <p>

                                        <span>Email</span>

                                        <br/>
                                        
                                        <strong>
                                          <a href="mailto:john@carsales.com">john@carsales.com</a>
                                        </strong>
                                      </p>
                                    </div>
                                </li>
                            </ul> 
                        </div>
                    </form>
                  </div>
                </div>
            </div>
        </section>
            <div class="blue-button align-center">
          <a href="#">Back to PreOwned Cars</a>
        </div>
    </main>

                </div>
            </div>
        </section>
        <Footer></Footer>
      </main>
    </div>
  );
};

export default PreOwnedDetails;