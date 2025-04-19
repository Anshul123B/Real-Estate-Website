import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
  } from "react-accessible-accordion";
  
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from 'react-icons/md'
import './value.css'

const Value = () => {
  return (
    <div>
      <section className="v-wrapper">
        <div className="padding innerWidth flexCenter v-vontainer">
            {/*left side */}
            <div className="v-left">
                <div className="image-container">
                    <img src="./value.png" alt=""/>
                </div>
            </div>

            {/*right side*/}
            <div className="felxColStart v-right">
                <span className="orangeText">Our Value</span>
                <br/>
                <span className="primaryText">Value We Give to you</span>
                <br/>
                <span className='secondaryText'>
                      We're always here to support you with top-notch service.
                      <br />
                      We believe the right place to live can truly enhance your life.
                </span>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Value
