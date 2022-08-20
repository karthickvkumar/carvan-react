import React, {useEffect, useState}  from 'react'
import Header from '../componenets/Header';
import Footer from '../componenets/Footer';
import CarBrands from '../componenets/CarBrands';
import axios from 'axios';


 function RangeofCars() {
  const bannerImg = require("../img/blog-image-fullscren-1-1920x700.jpg");

  const [listOfRange, setListOfRange] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    loadRangeOfCarsAPI();  
  },[]);

  const loadRangeOfCarsAPI = () =>{
    const url = "http://localhost:9000/rangeOfCars";

    axios.get(url)
      .then((response) => {
        const result = response.data;
        setListOfRange(result);
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
                        <h2>List of Ranges Available</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
      <main>
      <section className ="featured-places">
            <div className ="container">
              <h3>Shop Great Values</h3>
                <div className ="row">
                    <CarBrands {...{brands : listOfRange}}></CarBrands> 
                </div>
            </div>
        </section>
        <Footer></Footer>
      </main>
    </div>
  )
}
export default RangeofCars;