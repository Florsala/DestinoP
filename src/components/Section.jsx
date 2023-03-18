import React, { useContext, useEffect, useState } from 'react';
import flecha2 from "../assets/flechas.png";
import flecha from '../assets/flecha.png'
import SliderHome from './SliderHome';
import cartContext from '../context/CartContext';


const Section = () => {
  const [etiquetas, setEtiquetas] = useState([]);
  const { idioma, getIdiomaSeccion } = useContext(cartContext);
  useEffect(() => {
    setEtiquetas(getIdiomaSeccion("Home"));
  }, [idioma]);
  return (
    <div>
      <div className="circle">
        <img
          src={flecha2}
          style={{
            height: "3.125rem",
            width: "3rem",
            zIndex:' 1'
          }}
          alt=""
        />
        
      </div>
        <div className="container_title ">
        
        <div className='container-md ' style={{ display: "flex", margin: " 0 auto" }}>
          <img
           className='flecha1'
            src={flecha}
            
            alt="flecha"
          />
          <div>
          <h2>{etiquetas[6]?.palabra.toUpperCase()}</h2>
           
            <p>
            {etiquetas[7]?.palabra}
            </p>
          </div>

          <img
          className='flecha2'
            src={flecha}
           
            alt=""
          />
        </div>
      </div>

      <SliderHome/>

    
    </div>
  )
}

export default Section