import React from 'react'
import './contact.css'

const Contact = () => {
  return ( 
    <section className="c-wrapper">
        <div className="padding innerWidth flexCenter c-container">
            {/*left side*/}
            <div className="flexColStart c-left">
                <span className="orangeText">Get in Touch</span>
                <span className="primaryText">We're Here to Help</span>
                <span className="secondaryText">Our team is always ready to assist you with top-quality service. 
                    We believe the right home can truly improve your life.
                </span>

                <div className="flexColStart contactModes">
                    {/*first row */}
                    <div className="flexColStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            {/*Right side*/}
            <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt=""/>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Contact
