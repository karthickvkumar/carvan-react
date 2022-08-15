import React from 'react'
import Header from '../componenets/Header';
import Footer from '../componenets/Footer';
import PreOwned from '../componenets/PreOwned';

 function PreownedCars() {
  const bannerImg = "https://di-uploads-pod13.dealerinspire.com/suntrupdirect/uploads/2020/03/Handing-Off-Keys-at-Dealership_206915946.jpg";
  
  const data = {
    cars : [
      {
        id: 1,
        model : "2019 Ford Edge",
        actual_price: "11999.00",
        discount_price: "11779.00",
        km: "130 000",
        cc: "1800",
        gear: "Manual",
        hp: "190",
        fuel_type: "Petrol",
        year: "2008",
        image: `${require("../img/product-1-720x480.jpg")}`
      }
    ]
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
                        <h2>List of Pre-Owned Cars</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
      <main>
      <section className ="featured-places">
            <div className ="container">
                <div className ="row">
                    <PreOwned {...data}></PreOwned>
                </div>
            </div>
        </section>
        <Footer></Footer>
      </main>
    </div>
  )
}
export default PreownedCars;