import React from 'react';
import {useNavigate} from "react-router-dom"

const PreOwned = (props) => {

  const navigate = useNavigate();

  const loadCarDetail = (value) => {
    navigate(`/PreownedCars/${value.id}`, {state: value});
  }

  return (
    <div>
      {
        props.cars.map((value, index) => {
          return(
            <div className="col-md-4 col-sm-6 col-xs-12" key={index}>
              <div className="featured-item">
                  <div className="thumb">
                      <div className="thumb-img">
                          <img src={value.image} alt="" />
                      </div>
                      <div className="overlay-content">
                        <strong><i className="fa fa-dashboard"></i>{value.km}km</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                        <strong><i className="fa fa-cube"></i> {value.cc} cc</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                        <strong><i className="fa fa-cog"></i> {value.gear}</strong>
                      </div>
                  </div>
                  <div className="down-content">
                      <h4>{value.model}</h4>

                      <br/>

                      <p>{value.hp} hp  /  {value.fuel_type}  /  {value.year}  /  Used vehicle</p>

                      <p><span><del className='brand-info'><sup>$</sup>{value.actual_price}</del> <strong className='brand-info'><sup>$</sup>{value.discount_price}</strong></span></p>

                      <div className="text-button" onClick={() => loadCarDetail(value)}>
                          <a>View More</a>
                      </div>
                  </div>
              </div>
          </div>
          )
        })
      }
    </div>
  );
};

export default PreOwned;