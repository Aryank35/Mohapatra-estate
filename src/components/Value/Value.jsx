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
import data from "../../utils/accordion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
const Value = () => {
  return (
    <div>
        <div className="container md:px-[100px] mx-auto py-9 flex items-center justify-between ">
        <div className="left w-full md:w-[50%] flex-1">
          <div className="image w-[94%] md:w-[30rem] md:h-[38rem] overflow-hidden border-8 border-solid border-[#EEE] rounded-t-[15rem]">
            <img src="./value.png" className='md:h-[100%] w-[100%] ' alt="value jpg" />
          </div>
        </div>
        <div className="flex flex-col mx-auto gap-[0.5rem] w-full md:w-[50%]">
            <div className="right flex flex-col gap-[0.5rem] items-center space-y-2 ">
                <p className='text-2xl text-center font-bold text-orange-400'>Our Value</p>
                <h1 className='text-4xl font-bold text-[#1f3e72]'>Value We Give to You</h1>
                <p className='text-gray-400 text-center '>We always ready to help by providijng the best services for you.
                We beleive a good blace to live can make your life better
                </p>
            </div>
            <Accordion 
            className='accordion mt-[2rem] border-none'
            allowMultipleExpanded={false}
            preExpanded={[0]}
            >

                {
                    data.map((item, i)=>{
                        const [className, setClassName] = useState(null);
                        return (
                            <AccordionItem className={`accordionItem ${className} bg-white border-[0.8px]  border-solid border-[#808080] rounded-[8px] overflow-hidden mb-[20px]`} key={i} uuid={i}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className='bg-white flex items-center p-[1rem] w-full justify-between cursor-pointer '>
                                        <AccordionItemState>
                                            {({expanded}) => expanded? setClassName("shadow-xl rounded-[6px] shadow-blue-300") : setClassName("collapsed")}
                                        </AccordionItemState>
                                        <div className="icon px-[10px] py-[6px] bg-[#eeeeff] rounded-[5px] text-blue-500 text-[1.1rem] ">{item.icon}</div>
                                        <p className=''>{item.heading}</p>
                                        <div className="dropDownIcon px-[10px] py-[6px] bg-[#eeeeff] rounded-[5px] text-blue-500 text-[1.1rem] ">
                                        <FontAwesomeIcon icon={faCaretDown} />
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="details">{item.detail}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        )
                    })
                }
            
            </Accordion>
            </div>
        </div>
        
</div>
  )
}

export default Value