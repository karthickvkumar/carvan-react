import React, {useState} from 'react'
import Footer from '../componenets/Footer';
import Header from '../componenets/Header';
import axios from 'axios';

 function ContactUs() {
  const bannerImg = "https://jgu.edu.in/wp-content/uploads/2021/06/contact_banner_short.jpg";

  const [contactForm, setContactForm] = useState({
    name: "",
    subject: "",
    message: ""
  });

  const onHandleInput = (event) => {
    setContactForm(...{contactForm, [event.target.name] : event.target.value})
  }

  const submitContact = () =>{
    const url = "http://localhost:9000/submit";

    axios.post(url, contactForm)
      .then((response) => {
        const result = response.data;
        alert(result.message);
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
                        <h2>Contact Us</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <main>
        <section className ="popular-places">
            <div className ="container">
                <div className ="contact-content">
                    <div className ="row">
                        <div className ="col-md-8"> 
                            <div className ="left-content">
                                <div className ="row">
                                    <div className ="col-md-6">
                                      <fieldset>
                                        <input name="name" type="text" className ="form-control" id="name" placeholder="Your name..." required="" onChange={onHandleInput}/>
                                      </fieldset>
                                    </div>
                                     <div className ="col-md-6">
                                      <fieldset>
                                        <input name="subject" type="text" className="form-control" id="subject" placeholder="Subject..." required="" onChange={onHandleInput}/>
                                      </fieldset>
                                    </div>
                                    <div className ="col-md-12">
                                      <fieldset>
                                        <textarea name="message" rows="6" className ="form-control" id="message" placeholder="Your message..." required="" onChange={onHandleInput}></textarea>
                                      </fieldset>
                                    </div>
                                    <div className ="col-md-12">
                                      <fieldset>
                                        <div className ="blue-button">
                                            <a onClick={() => submitContact()} id="form-submit" className ="btn">Send Message</a>
                                        </div>
                                      </fieldset>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className ="col-md-4">
                            <div className ="right-content">
                                <div className ="row">
                                    <div className ="col-md-12">
                                        <div className ="content"> 
                                            <p>Etiam viverra nibh at lorem hendrerit porta non nec ligula. Donec hendrerit porttitor pretium.</p>
                                            <ul>
                                                <li><span>Phone:</span><a href="#">+1 333 4040 5566</a></li>
                                                <li><span>Email:</span><a href="#">contact@company.com</a></li>
                                                <li><span>Address:</span><i className ="fa fa-map-marker"></i> 212 Barrington Court New York</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
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
export default ContactUs;