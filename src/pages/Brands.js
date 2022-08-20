import React, {useEffect, useState} from 'react'
import CarBrands from '../componenets/CarBrands';
import Footer from '../componenets/Footer';
import Header from '../componenets/Header';
import axios from 'axios';

function Brands() {
  const bannerImg = "https://www.wardsauto.com/sites/wardsauto.com/files/styles/article_featured_retina/public/Connected-car%20Motoring%20Research.com_.jpg?itok=pdcWPb7a";

  const [listOfBrand, setListOfBrand] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    loadBrandsAPI();  
  },[]);

  const loadBrandsAPI = () =>{
    const url = "http://localhost:9000/brands";

    axios.get(url)
      .then((response) => {
        const result = response.data;
        setListOfBrand(result);
      })
      .catch((error) => {
        console.log(error)
      })
  }

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
                    <CarBrands brands={listOfBrand} ></CarBrands>                    
                </div>
            </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  )
}
export default Brands;