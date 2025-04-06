import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <div>
      <section className="hero-wrapper">
        <div className="paddings innerwidth flexCenter hero-center">

            <div className="hero-left">
                Left Section
            </div>

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
