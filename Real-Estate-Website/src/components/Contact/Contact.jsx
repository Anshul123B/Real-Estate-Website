import React from 'react'
import './contact.css'
import { MdCall } from 'react-icons/md'
import {BsFillChatDotFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

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
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span>Call</span>
                                    <span>021 123 456 34</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>
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
