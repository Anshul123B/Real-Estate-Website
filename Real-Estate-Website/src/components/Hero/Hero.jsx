import React from 'react'
import "./Hero.css"
import { IoIosPin } from "react-icons/io";
import CountUp from "react-countup"



const Hero = () => {
  return (
    <div>
      <section className="hero-wrapper">
        <div className="paddings innerwidth flexCenter hero-center">

            {/*Left Side*/}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/>
                    <h1>
                        Spot <br/>
                        Best-Fit <br/> Property
                    </h1>
                </div>

                <div className=" flexColStart hero-dis">
                    <span className="secondaryText">Discover a property that perfectly matches your needs and lifestyle</span>
                    <span className="secondaryText">Find your ideal space with properties tailored just for you</span>
                </div>

                <div className="flexCenter search-bar">

                  {/*Fetch the location icon from reacticons*/}
                <IoIosPin color="var(--blue)" size={25}/>
                <input type="text"/>
                <button className="button">Search</button>
                </div>

                <div className="flexCenter stats">
                  <div className="flexColcenter stat">
                    <span>
                      <CountUp start={8800} end={9000} duration={4}/>
                      <span>+</span>
                      </span>
                      <span className="secondaryText">
                        <br/>
                        Premium Products
                      </span>
                  </div>

                  <div className="flexColcenter stat">
                    <span>
                      <CountUp start={1950} end={2000} duration={4}/>
                      <span>+</span>
                      </span>
                      <span className="secondaryText">
                        <br/>
                        Happy Customer
                      </span>
                  </div>

                  <div className="flexColcenter stat">
                    <span>
                      <CountUp end={28}/>
                      <span>+</span>
                      </span>
                      <span className="secondaryText">
                        <br/>
                        Award Winning
                      </span>
                  </div>

                </div>
            </div>

            {/*Right side*/}
            <div className=" flexCenter hero-right">
                <div className="image-container">
                    <img src="./hero-image.png" alt=""/>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
