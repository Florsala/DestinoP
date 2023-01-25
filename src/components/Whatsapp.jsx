import React, { useEffect, useState } from "react";
import wsp from "../assets/whatsapp.svg";
import { getContacto } from "../helpers/getContacto";
import '../styles/Whatsapp.css';


const Whatsapp = () => {

  const [contacto, setContacto] = useState([]);

  const getInfoContacto = async () => {
    const newInfo = await getContacto();
    setContacto(newInfo);
  }


  
  useEffect(()=>{
    getInfoContacto()
  },[])





  return (
    <div className="FloatIcon-Wh ">
      
      <a
      className="FloatIcon"
        
       href={`https://wa.me/${contacto.whatsapp?.replace(/[^\w]/gi, '')} `}
        target={"blank"}
      >
         <img className="wsp_btn" src={wsp} alt="whatsapp" />
      </a>
    </div>
  );
};

export default Whatsapp;