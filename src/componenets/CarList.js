import React from 'react';

const CarList = (props) => {

  return (
    <div>
      {
        props.cars.map((value, index) => {
          return(
            <div className ="col-md-4 col-sm-6 col-xs-12" key={index} id={value.brand+index}>
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