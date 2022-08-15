import React from 'react'
import CarBrands from '../componenets/CarBrands';
import Footer from '../componenets/Footer';
import Header from '../componenets/Header';

function Brands() {
  const bannerImg = "https://www.wardsauto.com/sites/wardsauto.com/files/styles/article_featured_retina/public/Connected-car%20Motoring%20Research.com_.jpg?itok=pdcWPb7a";
  const data = {
    brands : [
      {
        name : "Honda Civic",
        brand:"Honda",
        image: "https://assets.fastly.carvana.io/home-assets/pivot-2022/great-values-v2/honda-civic_07-21-22.png?width=275"
      },
      {
        name : "Ford F-150",
        brand:"Ford",
        image: "https://assets.fastly.carvana.io/home-assets/pivot-2022/great-values-v2/ford-f150_07-21-22.png?width=275"
      },
      {
        name : "Toyata Camry",
        brand:"Toyata",
        image: "https://assets.fastly.carvana.io/home-assets/pivot-2022/great-values-v2/toyota-camry_07-21-22.png?width=275"
      },
      {
        name : "Chevrolet Equinox",
        brand:"chevrolet",
        image: "https://assets.fastly.carvana.io/home-assets/pivot-2022/great-values-v2/chevrolet-equinox_07-21-22.png?width=275"
      },
      {
        name : "Nissan Altima",
        brand:"Nissan-Altima",
        image: "https://assets.fastly.carvana.io/home-assets/pivot-2022/great-values-v2/nissan-altima_07-21-22.png?width=275"
      },
      {
        name : "Ford Mustang",
        brand:"Ford-Mustang",
        image: "https://assets.fastly.carvana.io/home-assets/pivot-2022/great-values-v2/ford-mustang_07-21-22.png?width=275"
      },
      {
        name : "Mercedes-Benz",
        brand:"Mercedes-Benz",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTei2T4hUICSNcK_WF0Uk1wlwC_lYqHhW8KAOUIoi02MltNAp42IYM2Iyp9J-JeDpY5JcI&usqp=CAU"
      },
      {
        name : "BMW i4",
        brand:"BMW",
        image: "https://cache.bmwusa.com/cosy.arox?pov=walkaround&brand=WBBM&vehicle=23XX&client=byo&paint=P0300&fabric=FKCSW&sa=S01X1,S0205,S0249,S0255,S0302,S0316,S03AG,S03MB,S0420,S0423,S0473,S0481,S04LU,S0508,S0534,S0544,S05A4,S05AS,S0676,S06AC,S06AK,S06UN,S0775&quality=70&bkgnd=transparent&resp=png&angle=60"
      },
      {
        name : "Maruti Suzuki",
        brand:"Maruti-Suzuki",
        image: "https://5.imimg.com/data5/YR/TQ/GLADMIN-33713197/maruti-suzuki-alto-800-car-500x500.png"
      },
      {
        name : "Jeep Wrangler",
        brand:"Jeep-Wrangler",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqvpczRdtMFeEbE3tjFnvRS2wmdYWtWv-CBxhX5PfbvrFDCia_FbmegyNFtpuLXW_qvM&usqp=CAU"
      },
      {
        name : "Volkswagen",
        brand:"Volkswagen",
        image: "https://images.carprices.com/pricebooks_data/usa/colorized/2022/Volkswagen/View2/Passat/Limited_Edition/A345P6_0Q0Q.png"
      },
      {
        name : "Tesla Model",
        brand:"Tesla",
        image: "https://www.tesla.com/ownersmanual/images/GUID-5543BA62-932F-46C5-B1EF-44707D4726B2-online-en-US.png"
      },
    ]
};

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
                    <CarBrands {...data}></CarBrands>                    
                </div>
            </div>
        <div class="blue-button align-center">
          <a href="#">View More</a>
        </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  )
}
export default Brands;