import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import 'swiper/css';
import data from "../../utils/slider.json"
import { sliderSettings } from '../../utils/common';
 
const Residencies = () => {
  return (
    <div>
      <div className="container p-4 overflow-hidden relative">
        <div className="headings">
          <p className='text-xl font-bold text-orange-500'>Best Choices</p>
          <p className='text-2xl font-bold text-[#1f3e72]'>Popular Residencies</p>
        </div>
        
        <Swiper {...sliderSettings} className='py-3'>
        <SliderButtons/>
          {
            data.map((card, i)=>(
              <SwiperSlide key={i}>
                
                <div className="card bg-gray-50 flex justify-center items-center flex-col gap-[0.6rem] p-[1rem] rounded-[10px] max-w-max m-auto transition-all delay-[300mx] ease-in hover:scale-[1.025] hover:cursor-pointer hover:shadow-lg hover:shadow-black hover:bg-gradient-to-b from-white to-indigo-300">
                  <img src={card.image} alt="home" className='w-[100%] max-w-[15rem]' />
                  <p className="price font-semibold text-[1.2rem]">
                    <span className='text-orange-400 pr-1'>$</span>
                    <span>{card.price}</span>
                  </p>
                  <p className='flex flex-col '>
                    <span className='text-[1.5rem]'>{card.name}</span>
                    <span className='text-[0.7rem] w-[15rem]'>{card.detail}</span>
                  </p>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  )
}

export default Residencies

const SliderButtons = () => {
  const swiper = useSwiper();
  return(
    <div className="button absolute gap-[1rem] -top-[3rem] right-3 space-x-2">
      <button className='text-[1.2rem] py-[0.2rem] px-[0.8rem] text-blue-500 hover:bg-[#EEEEff] shadow-lg bg-gray-100 font-bold rounded-lg cursor-pointer ' onClick={()=> swiper.slidePrev()}>&lt;</button>
      <button className='text-[1.2rem] py-[0.2rem] px-[0.8rem] text-blue-500 hover:bg-[#EEEEff] shadow-lg bg-gray-100 font-bold rounded-lg cursor-pointer ' onClick={()=> swiper.slideNext()}>&gt;</button>
    </div>
  )
}