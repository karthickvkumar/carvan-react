import React from 'react';

const CarBrands = () => {
  const brands = [
    {
      name : "Honda Civic",
      image: "https://assets.fastly.carvana.io/home-assets/pivot-2022/great-values-v2/honda-civic_07-21-22.png?width=275"
    },
    {
      name : "Ford F-150",
      image: "https://assets.fastly.carvana.io/home-assets/pivot-2022/great-values-v2/ford-f150_07-21-22.png?width=275"
    },
    {
      name : "Toyata Camry",
      image: "https://assets.fastly.carvana.io/home-assets/pivot-2022/great-values-v2/toyota-camry_07-21-22.png?width=275"
    },
    {
      name : "Chevrolet Equinox",
      image: "https://assets.fastly.carvana.io/home-assets/pivot-2022/great-values-v2/chevrolet-equinox_07-21-22.png?width=275"
    },
    {
      name : "Nissan Altima",
      image: "https://assets.fastly.carvana.io/home-assets/pivot-2022/great-values-v2/nissan-altima_07-21-22.png?width=275"
    },
    {
      name : "Ford Mustang",
      image: "https://assets.fastly.carvana.io/home-assets/pivot-2022/great-values-v2/ford-mustang_07-21-22.png?width=275"
    },
    {
      name : "Mercedes-Benz",
      image: "https://imgd.aeplcdn.com/0x0/n/cw/ec/48067/s-class-exterior-right-front-three-quarter-3.jpeg"
    },
    {
      name : "BMW i4",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaLFMKHjJXGEC_0H30ZJ99Fm0tFvWpaGQ0LL_wQN7GEobXPZfKnWhyJSquLTfjKDiyZZc&usqp=CAU"
    },
    {
      name : "Maruti Suzuki",
      image: "https://5.imimg.com/data5/YR/TQ/GLADMIN-33713197/maruti-suzuki-alto-800-car-500x500.png"
    },
  ];


  return (
    <div>
        {
          brands.map((value, index) => {
            return(
              <div className ="col-md-4 col-sm-6 col-xs-12">
                <div className ="featured-item">
                    <div className ="thumb">
                        <div className ="thumb-img">
                            <img src={value.image} alt=""/>
                        </div>
                    </div>
                    <div className="down-content">
                        <h4>{value.name}</h4>
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