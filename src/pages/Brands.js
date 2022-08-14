import React from 'react'
import CarBrands from '../componenets/CarBrands';
import Header from '../componenets/Header';

function Brands() {
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
                        <h2>Brands</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
      <main>
      <section className ="featured-places">
            <div className ="container">
                <div className ="row">
                    <div className ="col-md-12">
                        <div className ="section-heading">
                            <h2>Affordable Cars Available Now</h2>
                        </div>
                    </div> 
                </div> 
                <div className ="row">
                    <CarBrands></CarBrands>                    
                </div>
            </div>
        <div class="blue-button">
          <a href="#">View More</a>
        </div>
        </section>
      </main>
    </div>
  )
}
export default Brands;