import React from 'react';
import ballena from "../assets/ballena.jpg";
import flecha from "../assets/flecha.png";


const Section = () => {
  return (
    <div>
        <div className="container_title">
        <h3>Prepárate para vivir uno de los más lindos </h3>
        <div style={{ display: "flex", width: "80%", margin: " 0 auto" }}>
          <img
            src={flecha}
            style={{
              height: "9.375rem",
              objectFit: "cover",
              transform: "rotate(180deg)",
            }}
            alt=""
          />
          <div>
            <h4>momentos en el fin del mundo</h4>
            <p>
              Destino Patagonia, desea que tu experiencia sea cálida y
              personalizada por lo que la tripulación y el guía estarán
              pendientes de que así sea.
            </p>
          </div>

          <img
            src={flecha}
            style={{ height: "9.375rem", objectFit: "cover" }}
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