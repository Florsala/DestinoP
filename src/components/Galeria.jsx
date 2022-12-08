import React from 'react';
import '../styles/Galeria.css'

import monta from "../assets/monta.png";
import ushuaia from '../assets/ush-am.jpg';



const Galeria = () => {
  return (
    <div>

<div>
        <img
          className="headerImg"
          style={{ filter: "brightness(0.9)" }}
          src={ushuaia}
          alt=""
        />
        <img className="headerImg2" src={monta} alt="mount" />

        <div className="headerTitle_galeria  container-md">
          <h2 className="text-uppercase display-2" style={{fontWeight:'600'}}>
           Ushuaia 
            
          </h2>
          <h4>en fotos</h4>
        </div>
      </div>





    </div>
  )
}

export default Galeria