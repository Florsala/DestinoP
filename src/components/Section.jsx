import React from 'react';
import ballena from "../assets/ballena.jpg";
import flecha2 from "../assets/flecha2.png";
import flecha from '../assets/flecha.png'


const Section = () => {
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
          <h2>Prepárate para vivir uno de los más lindos momentos en el fin del mundo </h2>
           
            <p>
              Destino Patagonia, desea que tu experiencia sea cálida y
              personalizada por lo que la tripulación y el guía estarán
              pendientes de que así sea.
            </p>
          </div>

          <img
          className='flecha2'
            src={flecha}
           
            alt=""
          />
        </div>
      </div>

      <div>
        <img
       
          style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          src={ballena}
          alt="ballena"
        />
      </div>
    </div>
  )
}

export default Section