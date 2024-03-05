import React from "react";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faSearch } from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
  return (
    <div className="">
      <div className="hero h-full py-8 flex flex-col md:flex-row justify-between sm:px-[100px] items-center  ">
        <div className="left flex flex-col space-y-12 w-[90%] sm:w-[50%] justify-center">
          <div className="title relative z-0 mx-auto">
            <div className="orange-circle h-[4rem] w-[4rem] absolute bg-orange-400 rounded-full -top-7 -left-7 md:top-[-20px] md:right-[120px] z-[-1]" />
            <h1 className="text-white text-5xl texce sm:text-[3.8rem] leading-[4rem] font-bold tracking-wide">
              Discover
              <br />
              Most Suitable
              <br />
              Property
            </h1>
          </div>
          <div className="desc flex flex-col text-gray-400 mx-auto px-3">
            <span>Find a variety of properties that suit you very easilty</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>
          <div className="search bg-white py-1 rounded-2xl flex justify-between sm:px-2 items-center border-[#cdcdcd] border-4 w-[100%]">
            <FontAwesomeIcon
              className="text-blue-600 text-2xl ml-2"
              icon={faLocationDot}
            />
            <input
              type="text"
              className="sm:py-2 sm:px-6 border-none outline-none sm:text-xl"
            />
            <button className="hidden bg-blue-600 py-2 px-5 text-white rounded-3xl border-none transition-all duration-[300ms] ease-in hover:cursor-pointer hover:scale-[1.1]">
              Search
            </button>
            <button className="sm:hidden bg-blue-600 py-2 px-5 text-white rounded-3xl border-none transition-all duration-[300ms] ease-in hover:cursor-pointer hover:scale-[1.1]">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <div className="stats flex justify-around items-center">
            <div className="stat1 flex flex-col justify-center items-center">
              <h1 className="text-white text-2xl md:text-4xl  flex items-center mx-auto">
                <CountUp start={8800} end={9000} duration={4} />
                <span className="text-orange-400 text-3xl mx-2">+</span>
              </h1>
              <p className="text-slate-300 text-sm my-2">Premium Products</p>
            </div>
            <div className="stat2 flex flex-col justify-center items-center">
              <h1 className="text-white text-2xl md:text-4xl  flex items-center mx-auto">
                <CountUp start={1900} end={2000} duration={3} />
                <span className="text-orange-400 text-3xl mx-2">+</span>
              </h1>
              <p className="text-slate-300 text-sm my-2 ">Happy Customer</p>
            </div>
            <div className="stat3 flex flex-col justify-center items-center">
              <h1 className="text-white text-2xl md:text-4xl  flex items-center mx-auto">
                <CountUp start={10} end={28} duration={2} />
                <span className="text-orange-400 text-3xl mx-2">+</span>
              </h1>
              <p className="text-slate-300 text-sm my-2 ">Award Winning</p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="image w-[94%] mx-auto md:w-[30rem] md:only:h-[35rem] overflow-hidden border-8 border-solid border-[#302e2d] rounded-t-[15rem]">
            <img src="./hero-image.png" className="h-[100%] w-[100%] " alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
