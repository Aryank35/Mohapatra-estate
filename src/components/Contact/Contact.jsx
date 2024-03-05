import React from "react";
// import ContactBox from "./ContactBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faVideo, faMessage } from "@fortawesome/free-solid-svg-icons";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";

const ContactBox = (props) => {
  return (
    <div className="box flex flex-col border-[3px] mb-6 w-full md:w-[45%] p-2">
      <div className="flex items-center">
        <div className="icon text-xl px-2 py-1 bg-[#eeeeff] rounded-lg text-blue-600">
          <FontAwesomeIcon icon={props.icon} />
        </div>
        <div className="flex flex-col justify-center items-center mx-auto">
          <h1 className="text-lg font-bold">{props.name}</h1>
          <p className="text-md text-slate-500">{props.number}</p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-3">
        <a href={`tel:${props.number}`} target="_blank" rel="call">
          <button className="py-3 flex px-[50px] text-xs md:text-lg text-blue-500 hover:text-white font-semibold items-center bg-[#eeeeff] hover:bg-blue-500 rounded-md">
            {props.btnText}
          </button>
        </a>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="flex p-9 justify-center items-center">
      <div className="Left-container md:w-[48%] mx-auto my-auto">
        <div className="heading mx-auto">
          <p className="text-orange-500 text-center font-bold text-2xl">Contact Us</p>
          <p className="text-sm text-slate-500 px-5 text-center">
            We are always ready to help by providing the best services for you.
            We believe a good place to live can make your life better.
          </p>
        </div>
        <div className="contact-box">
          <div className="box p-2">
            <div className="flex flex-wrap justify-center items-center md:space-x-3 my-4">
            <ContactBox
              icon={faPhone}
              name="Call"
              number="9337440067"
              btnText="Call now"
            />
            <ContactBox
              icon={faWhatsapp}
              name="Chat"
              number="9337440067"
              btnText="Chat now"
            />
            </div>
            <div className="flex flex-wrap md:space-x-3 justify-center items-center my-4">
            <ContactBox
              icon={faVideo}
              name="Video call"
              number="9337440067"
              btnText="Video call now"
            />
            <ContactBox
              icon={faMessage}
              name="Message"
              number="9337440067"
              btnText="Message now"
            />
            </div>
          </div>
        </div>
      </div>

      <div className="right-container hidden md:flex">
          <div className="image w-[30rem] h-[35rem] overflow-hidden border-8 border-solid border-[#f7f0ed] rounded-t-[15rem]">
            <img src="./contact.jpg" className='h-[100%] w-[100%] bg-cover' alt="" />
          </div>
    </div>
    </div>
  );
};

export default Contact;
