import React from 'react'
import Header from '../componenets/Header';
import Footer from '../componenets/Footer';
import CarBrands from '../componenets/CarBrands';

 function RangeofCars() {
  const bannerImg = require("../img/blog-image-fullscren-1-1920x700.jpg");
  const data = {
    brands : [
      {
        "name" : "Small Car",
        "brand":"Small-Car",
        "image": "https://cdn.autoportal.com/img/news/3552/main/main.jpg"
      },
      {
        "name" : "Sedan",
        "brand":"Sedan",
        "image": "https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/1600x590_verna.png"
      },
      {
        "name" : "SUV's",
        "brand":"SUV",
        "image": "https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/1600x590_creta.png"
      },
      {
        "name" : "Van",
        "brand":"Van",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLGs9UfsoHcbkjJ_Vs5F7S7wP2ejI__NEbphhwo4PgM-Y0_E1Pn7Aq-xGnfejumsPHAOk&usqp=CAU"
      },
      {
        "name" : "Jeep",
        "brand":"Jeep",
        "image": "https://www.jeep-india.com/content/dam/cross-regional/apac/jeep/en_in/allnewjeepcompass7thjan/thumbnail-compass-wrangler-meridian/thumbnail-wrangler.jpg.img.500.jpg"
      },
      {
        "name" : "Truck",
        "brand":"Truck",
        "image": "https://cdn.autoportal.com/img/news/11894/main/9b3e39c9ada6a44a5ad451212fd3006d/main_cropped.jpg"
      },
      {
        "name" : "Hatchback",
        "brand":"Hatchback",
        "image": "https://www.hyundai.com/content/dam/hyundai/in/en/data/vehicle-thumbnail/1600x590_nios.png"
      },
      {
        "name" : "Coupes",
        "brand":"Coupes",
        "image": "https://static.autox.com/uploads/cars/2022/02/bmw-m4-competition.jpg"
      },
      {
        "name" : "Electric",
        "brand":"Electric",
        "image": "https://www.solarreviews.com/content/images/blog/post/focus_images/2242_9c1fbb79-3740-4ef4-9c67-9730e6cadddd.gif"
      }
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
                    <CarBrands {...data}></CarBrands> 
                </div>
            </div>
        </section>
        <Footer></Footer>
      </main>
    </div>
  )
}
export default RangeofCars;