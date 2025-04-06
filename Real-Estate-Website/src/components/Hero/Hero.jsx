import React from 'react'
import "./Hero.css"
import { HiLocationMarker } from 'react-icons/hi2';



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
                    <span>Discover a property that perfectly matches your needs and lifestyle</span>
                    <span>Find your ideal space with properties tailored just for you</span>
                </div>

                <div className="search-bar">
                    <HiLocationMarker color="var(--blue)" size={25}/>
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
