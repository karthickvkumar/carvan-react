import React from 'react';
import {useNavigate} from "react-router-dom"

const PreOwned = (props) => {

  const navigate = useNavigate();

  const loadCarDetail = (id) => {
    navigate(`/PreownedCars/${id}`);
  }

  return (
    <div>
      {
        props.cars.map((value, index) => {
          return(
            <div class="col-md-4 col-sm-6 col-xs-12" key={index}>
              <div class="featured-item">
                  <div class="thumb">
                      <div class="thumb-img">
                          <img src={value.image} alt="" />
                      </div>
                      <div class="overlay-content">
                        <strong><i class="fa fa-dashboard"></i>{value.km}km</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                        <strong><i class="fa fa-cube"></i> {value.cc} cc</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                        <strong><i class="fa fa-cog"></i> {value.gear}</strong>
                      </div>
                  </div>
                  <div class="down-content">
                      <h4>{value.model}</h4>

                      <br/>

                      <p>{value.hp} hp  /  {value.fuel_type}  /  {value.year}  /  Used vehicle</p>

                      <p><span><del className='brand-info'><sup>$</sup>{value.actual_price}</del> <strong className='brand-info'><sup>$</sup>{value.discount_price}</strong></span></p>

                      <div class="text-button" onClick={() => loadCarDetail(value.id)}>
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