import React from 'react'
import Footer from '../componenets/Footer';
import Header from '../componenets/Header';

function AboutUs() {
  const bannerImg = "https://www.nttdata.com/global/en/-/media/nttdataglobal/1_images/about-us/about-t-hero_d.jpg?h=894&la=en&w=2800&hash=E52961AAC934758C1334C1C916ECC7BB4A709E49";

  return (
    <div>
      <Header></Header>
      <section className="banner banner-secondary" id="top" style={{backgroundImage : `url(${bannerImg})`}}>
        <div className="container">
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <div className="banner-caption">
                        <div className="line-dec"></div>
                        <h2>About Us</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <main>

      <section className="our-services">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="left-content">
                            <br />
                            <h4>About us</h4>
                            <p>Aenean hendrerit metus leo, quis viverra purus condimentum nec. Pellentesque a sem semper, lobortis mauris non, varius urna. Quisque sodales purus eu tellus fringilla.<br/><br/>Mauris sit amet quam congue, pulvinar urna et, congue diam. Suspendisse eu lorem massa. Integer sit amet posuere tellus, id efficitur leo. In hac habitasse platea dictumst. Vel sequi odit similique repudiandae ipsum iste, quidem tenetur id impedit, eaque et, aliquam quod.</p>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cupiditate id unde quis ut maxime, accusantium aperiam consectetur saepe delectus ducimus accusamus, ad doloremque ea. Quam, suscipit quidem perspiciatis asperiores, libero cum saepe hic pariatur eos deleniti illum minima minus.</p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img src={require("../img/about-1-720x480.jpg")} className="img-fluid user-img" alt="" />
                    </div>
                </div>
            </div>
        </section>

        <section id="video-container">
            <div className="video-overlay"></div>
            <div className="video-content">
                <div className="inner">
                      <div className="section-heading">
                          <span>Lorem ipsum dolor.</span>
                          <h2>Vivamus nec vehicula felis</h2>
                      </div>

                      <div className="container">
                        <div className="row">
                            <div className="col-lg-10 col-lg-offset-1">
                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi blanditiis, esse deserunt assumenda! Tempora nulla natus illum soluta quasi, nisi, in quaerat cumque corrupti ipsum impedit necessitatibus expedita minus harum, fuga id aperiam autem architecto odio. Perferendis eius possimus ex itaque tenetur saepe id quis dicta voluptas, corrupti sapiente hic!</p>
                            </div>
                        </div>
                      </div>
                </div>
            </div>
        </section>
    </main>
    <Footer></Footer>
    </div>
  )
}
export default AboutUs;