import React from "react";
import "../styles/Contacto.css";
import logo2 from "../assets/logo2.png";

const Contacto = () => {
  return (
    <div>
      <div className="contacto_header">
        <h3>CONTACTANOS PARA MÁS INFORMACIÓN</h3>
      </div>

      <div style={{display:'flex',justifyContent: 'space-evenly', marginBottom:'3rem'}}>

        <div style={{ width: "31.25rem", padding: "1rem", margin: "1rem" }}>
        <img style={{ height: "14rem" }} src={logo2} alt="logo" />
        <ul
          style={{
            fontSize: "1.3rem",
            fontWeight: "500",
            color: "var(--grey-color)",
            margin: "1rem",
            listStyle: "none",
          }}
        >
          <li>CONTACTO:</li>
          <li>AV. PREFECTURA NAVAL 270, USHUAIA</li>
          <li>+54 9 2901 581262</li>
          <li>INFO@DESTINOPATAGONIA.COM</li>
        </ul>
      </div>

      <div className="contacto_form"></div>
      </div>

      
    </div>
  );
};

export default Contacto;
