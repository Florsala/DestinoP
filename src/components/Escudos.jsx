import React from "react";
import confianza from "../assets/confianza.png";
import contemplacion from "../assets/contemplacion.png";
import experiencia from "../assets/experiencia.png";
import seguridad from "../assets/seguridad.png";

const Escudos = () => {
  return (
    <div className="escudos text-uppercase">
      <div className="text-uppercase ">
        <img src={experiencia} alt="" />
        <p>experiencia</p>
      </div>
      <div>
        <img src={seguridad} alt="" />
        <p>seguridad</p>

      </div>
      <div>
        <img src={contemplacion} alt="" />
        <p>contemplacion</p>

      </div>
      <div>
        <img src={confianza} alt="" />
        <p>confianza</p>

      </div>
    </div>
  );
};

export default Escudos;
