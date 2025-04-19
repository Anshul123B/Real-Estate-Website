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
import data from '../../utils/accordion'

const Value = () => {
  return (
    <div>
      <section className="v-wrapper">
        <div className="padding innerWidth flexCenter v-container">
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

                <Accordion className="accordion"
                  allowMultipleExpanded={false}
                  preExpanded={[0]}
                >
                  {
                    data.map((item, i) => {
                      return (
                        <AccordionItem className='accordionItems' key={i} uuid={i}>
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              <div className="flexCenter icon">{item.icon}</div>
                              <span className="primaryText">
                                {item.heading}
                              </span>
                              <div className="flexCenter icon">
                                <MdOutlineArrowDropDown size={20}/>
                              </div>
                            </AccordionItemButton>
                          </AccordionItemHeading>

                          <AccordionItemPanel>
                            <p className="secondaryText">
                              {item.detail}
                            </p>
                          </AccordionItemPanel>
                        </AccordionItem>
                      )
                    })
                  }  
                </Accordion>

            </div>
        </div>
      </section>
    </div>
  )
}

export default Value
