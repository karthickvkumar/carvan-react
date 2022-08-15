import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/About-us';
import Brands from './pages/Brands';
import ContactUs from './pages/Contact-us';
import Home from './pages/Home';
import PreownedCars from './pages/Preowned-cars';
import RangeofCars from './pages/Rangeof-cars';
import SubBrands from './pages/SubBrands';
import PreOwnedDetails from './pages/PreOwned-details';

import './css/bootstrap.min.css';
import './css/bootstrap-theme.min.css';
import './css/fontAwesome.css';
// import './css/hero-slider.css';
import './css/style.css';
// import './css/owl-carousel.css';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/> }></Route>
          <Route path='/AboutUs' element={<AboutUs/>}></Route>
          <Route path='/Brands' element={<Brands/>}></Route>
          <Route path='/:brands' element={<SubBrands/>}></Route>
          <Route path='/RangeofCars' element={<RangeofCars/>}></Route>
          <Route path='/PreownedCars' element={<PreownedCars/>}></Route>
          <Route path='/PreownedCars/:id' element={<PreOwnedDetails/>}></Route>
          <Route path='/ContactUs' element={<ContactUs/>}></Route>

        </Routes>
      
      </BrowserRouter>
    </div>
  )
}
export default App;