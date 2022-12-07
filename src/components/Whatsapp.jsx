import React from "react";
import wsp from "../assets/whatsapp.svg";
import '../styles/Whatsapp.css';


const Whatsapp = () => {
  return (
    <div className="FloatIcon-Wh ">
      <a
      className="FloatIcon"
        
        /* href=" " */
        target={"blank"}
      >
         <img className="wsp_btn" src={wsp} alt="whatsapp" />
      </a>
    </div>
  );
};

export default Whatsapp;