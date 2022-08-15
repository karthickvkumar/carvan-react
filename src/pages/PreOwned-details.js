import React from 'react';
import Header from '../componenets/Header';
import Footer from '../componenets/Footer';
import {NavLink} from "react-router-dom";

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
        <section className="featured-places">
            <div className="container">
               <div className="row">
                  <div className="col-md-6 col-xs-12">
                    <div>
                      <img src={require("../img/product-1-720x480.jpg")} alt="" className="img-responsive wc-image"/>
                    </div>
                    
                  </div>

                  <div className="col-md-6 col-xs-12">
                    <form action="#" method="post" className="form">
                      <h2><small><del className='brand-info'> $11999.00</del></small><strong className="text-primary brand-info">$11779.00</strong></h2>

                      <br/> 

                      <ul className="list-group list-group-flush">
                       <li className="list-group-item">
                            <div className="clearfix">
                                 <span className="pull-left">Type</span>

                                 <strong className="pull-right">Used vehicle</strong>
                            </div>
                       </li>

                       <li className="list-group-item">
                            <div className="clearfix">
                                 <span className="pull-left"> Model</span>

                                 <strong className="pull-right">Lorem ipsum dolor sit</strong>
                            </div>
                       </li>

                       <li className="list-group-item">
                            <div className="clearfix">
                                 <span className="pull-left">First registration</span>

                                 <strong className="pull-right">05/2010</strong>
                            </div>
                       </li>

                       <li className="list-group-item">
                            <div className="clearfix">
                                 <span className="pull-left">Mileage</span>

                                 <strong className="pull-right">5000 km</strong>
                            </div>
                       </li>

                       <li className="list-group-item">
                            <div className="clearfix">
                                 <span className="pull-left">Fuel</span>

                                 <strong className="pull-right">Diesel</strong>
                            </div>
                       </li>

                       <li className="list-group-item">
                            <div className="clearfix">
                                 <span className="pull-left">Engine size</span>

                                 <strong className="pull-right">1800 cc</strong>
                            </div>
                       </li>

                       <li className="list-group-item">
                            <div className="clearfix">
                                 <span className="pull-left">Power</span>

                                 <strong className="pull-right">85 hp</strong>
                            </div>
                       </li>


                       <li className="list-group-item">
                            <div className="clearfix">
                                 <span className="pull-left">Gearbox</span>

                                 <strong className="pull-right">Manual</strong>
                            </div>
                       </li>

                       <li className="list-group-item">
                            <div className="clearfix">
                                 <span className="pull-left">Number of seats</span>

                                 <strong className="pull-right">4</strong>
                            </div>
                       </li>

                       <li className="list-group-item">
                            <div className="clearfix">
                                 <span className="pull-left">Doors</span>

                                 <strong className="pull-right">2/3</strong>
                            </div>
                       </li>

                       <li className="list-group-item">
                            <div className="clearfix">
                                 <span className="pull-left">Color</span>

                                 <strong className="pull-right">Black</strong>
                            </div>
                       </li>
                    </ul>


                    

                      <div className="accordions">
                            <ul className="accordion">
                                <li>
                                    <a className="accordion-trigger">Vehicle Extras</a>
                                    
                                    <div className="accordion-content" style={{display: 'block'}}>
                                        <div className="row">
                                            <div className="col-sm-6 col-xs-12">
                                                <p>ABS</p>
                                            </div>

                                            <div className="col-sm-6 col-xs-12">
                                                <p>Leather seats</p>
                                            </div>

                                            <div className="col-sm-6 col-xs-12">
                                                <p>Power Assisted Steering</p>
                                            </div>

                                            <div className="col-sm-6 col-xs-12">
                                                <p>Electric heated seats</p>
                                            </div>

                                            <div className="col-sm-6 col-xs-12">
                                                <p>New HU and AU</p>
                                            </div>

                                            <div className="col-sm-6 col-xs-12">
                                                <p>Xenon headlights</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                
                                <li>
                                    <a className="accordion-trigger">Contact Details</a>

                                    <div className="accordion-content" style={{display: 'block'}}>

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
            <div className="blue-button align-center">
          <NavLink to="/PreownedCars">Back to PreOwned Cars</NavLink>
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