import React from 'react';
import CarList from '../componenets/CarList';
import Footer from '../componenets/Footer';
import Header from '../componenets/Header';

const SubBrands = () => {
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
                        <h2>List of Models Available</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
      <main>
      <section className ="featured-places">
            <div className ="container">
              <h3>Browse by Popular Makes & Models</h3>
                <div className ="row">
                    <div className ="col-md-12">
                        <fieldset>
                          <svg viewBox="0 0 16 16" aria-label="Search" className="searchIcon" data-test="Magnify" data-qa="magnify"><path d="M15.75 14.57l-3.86-3.86A6.64 6.64 0 0 0 6.64 0 6.66 6.66 0 0 0 0 6.64a6.64 6.64 0 0 0 6.64 6.64 6.57 6.57 0 0 0 4.07-1.39l3.86 3.87a.87.87 0 0 0 .59.24.83.83 0 0 0 .59-1.43zM6.64 1.67a5 5 0 0 1 3.52 1.46 5 5 0 0 1-3.52 8.48 4.9 4.9 0 0 1-3.51-1.45 5 5 0 0 1 3.51-8.49z" fill="currentColor"></path></svg>
                          <input name="name" type="text" className="form-control search-input" id="name" placeholder="Search makes, models or keywords" required="" />
                        </fieldset>
                    </div> 
                </div> 
                <div className ="row">
                    <CarList></CarList>          
                </div>
                <div class="blue-button align-center">
                  <a href="#">Back to Brands</a>
                </div>
            </div>
        </section>
        <Footer></Footer>
      </main>
    </div>
  );
};

export default SubBrands;