import React from 'react';

const CarList = () => {

  const carList = [
    {
      model: "2014 Honda Civic",
      price: "$18,990",
      image: "https://cdn.autoportal.com/img/new-cars-gallery/honda/jazz/colors/8070d2c2b744fd319503ac1ba10dde5f.jpg"
    },
    {
      model: "2012 Honda Civic",
      price: "$15,990",
      image: "https://cdn.autoportal.com/img/new-cars-gallery/honda/wrv/colors/a5b70b20e9d2ecb7849a2e4cb2a92f79.jpg"
    },
    {
      model: "2016 Honda Civic",
      price: "$20,990",
      image: "https://m.economictimes.com/thumb/msid-79933399,width-1200,height-900,resizemode-4,imgsize-97551/honda-civic-1.jpg"
    },
    {
      model: "2014 Honda Civic",
      price: "$18,990",
      image: "https://cdn.autoportal.com/img/new-cars-gallery/honda/jazz/colors/8070d2c2b744fd319503ac1ba10dde5f.jpg"
    },
    {
      model: "2012 Honda Civic",
      price: "$15,990",
      image: "https://cdn.autoportal.com/img/new-cars-gallery/honda/wrv/colors/a5b70b20e9d2ecb7849a2e4cb2a92f79.jpg"
    },
    {
      model: "2016 Honda Civic",
      price: "$20,990",
      image: "https://m.economictimes.com/thumb/msid-79933399,width-1200,height-900,resizemode-4,imgsize-97551/honda-civic-1.jpg"
    },
    {
      model: "2014 Honda Civic",
      price: "$18,990",
      image: "https://cdn.autoportal.com/img/new-cars-gallery/honda/jazz/colors/8070d2c2b744fd319503ac1ba10dde5f.jpg"
    },
    {
      model: "2012 Honda Civic",
      price: "$15,990",
      image: "https://cdn.autoportal.com/img/new-cars-gallery/honda/wrv/colors/a5b70b20e9d2ecb7849a2e4cb2a92f79.jpg"
    },
    {
      model: "2016 Honda Civic",
      price: "$20,990",
      image: "https://m.economictimes.com/thumb/msid-79933399,width-1200,height-900,resizemode-4,imgsize-97551/honda-civic-1.jpg"
    },
    {
      model: "2014 Honda Civic",
      price: "$18,990",
      image: "https://cdn.autoportal.com/img/new-cars-gallery/honda/jazz/colors/8070d2c2b744fd319503ac1ba10dde5f.jpg"
    },
    {
      model: "2012 Honda Civic",
      price: "$15,990",
      image: "https://cdn.autoportal.com/img/new-cars-gallery/honda/wrv/colors/a5b70b20e9d2ecb7849a2e4cb2a92f79.jpg"
    },
    {
      model: "2016 Honda Civic",
      price: "$20,990",
      image: "https://m.economictimes.com/thumb/msid-79933399,width-1200,height-900,resizemode-4,imgsize-97551/honda-civic-1.jpg"
    },
    {
      model: "2014 Honda Civic",
      price: "$18,990",
      image: "https://cdn.autoportal.com/img/new-cars-gallery/honda/jazz/colors/8070d2c2b744fd319503ac1ba10dde5f.jpg"
    },
    {
      model: "2012 Honda Civic",
      price: "$15,990",
      image: "https://cdn.autoportal.com/img/new-cars-gallery/honda/wrv/colors/a5b70b20e9d2ecb7849a2e4cb2a92f79.jpg"
    },
    {
      model: "2016 Honda Civic",
      price: "$20,990",
      image: "https://m.economictimes.com/thumb/msid-79933399,width-1200,height-900,resizemode-4,imgsize-97551/honda-civic-1.jpg"
    },
  ];

  return (
    <div>
      {
        carList.map((value, index) => {
          return(
            <div className ="col-md-4 col-sm-6 col-xs-12" key={index}>
              <div className ="featured-item">
                  <div className ="thumb">
                      <div className ="thumb-img">
                          <img src={value.image} alt=""/>
                      </div>
                  </div>

                  <div className ="down-content" style={{padding: "20px"}}>
                      <h4 className='brand-info'>Model: {value.model}</h4>
                      <h4 className='brand-info'>Price: {value.price}</h4>
                  </div>
              </div>
          </div>
          )
        })  
      }
    </div>
  );
};

export default CarList;