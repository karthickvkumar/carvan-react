import React, {useEffect, useState} from 'react'
import Header from '../componenets/Header';
import Footer from '../componenets/Footer';
import PreOwned from '../componenets/PreOwned';
import axios from 'axios';

 function PreownedCars() {
  const bannerImg = "https://di-uploads-pod13.dealerinspire.com/suntrupdirect/uploads/2020/03/Handing-Off-Keys-at-Dealership_206915946.jpg";

  const [listOfPreOwned, setlistOfPreOwned] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    loadPreOwnedAPI();  
  },[]);

  const loadPreOwnedAPI = () =>{
    const url = "http://localhost:9000/preOwnedCars";

    axios.get(url)
      .then((response) => {
        const result = response.data;
        setlistOfPreOwned(result);
      })
      .catch((error) => {
        console.log(error)
      })
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
                    <PreOwned {...{cars: listOfPreOwned}}></PreOwned>
                </div>
            </div>
        </section>
        <Footer></Footer>
      </main>
    </div>
  )
}
export default PreownedCars;