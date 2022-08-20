import React from 'react';
import {useNavigate} from "react-router-dom";

const CarBrands = (props) => {
  const navigate = useNavigate();

  const loadBrand = (brand) => {
    navigate(`/${brand}`);
  }

  return (
    <div>
        {
          props.brands.map((value, index) => {
            return(
              <div className ="col-md-4 col-sm-6 col-xs-12 zoom" onClick={() => loadBrand(value.brand)}key={index}>
                <div className ="featured-item">
                    <div className ="thumb">
                        <div className ="thumb-img">
                            <img src={value.image} alt="" style={{maxHeight: '125px'}} />
                        </div>
                    </div>
                    <div className="down-content">
                        <h4 className='brand-name'>{value.name}</h4>
                        <br/>
                    </div>
                </div>
              </div>
            )
          })
        }
    </div>
  );
};

export default CarBrands;