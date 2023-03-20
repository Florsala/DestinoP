import React, { useContext, useEffect, useState } from "react";
import confianza from "../assets/confianza.png";
import contemplacion from "../assets/contemplacion.png";
import experiencia from "../assets/experiencia.png";
import seguridad from "../assets/seguridad.png";
import cartContext from "../context/CartContext";

const Escudos = () => {
  const { idioma,getIdiomaSeccion  } = useContext(cartContext);
  const [etiquetas, setEtiquetas] = useState([]);
  useEffect(() => {
    setEtiquetas(getIdiomaSeccion("Iconos"));
  }, [idioma]);
  return (
    <div className="escudos text-uppercase">
      <div className="text-uppercase ">
        <img src={experiencia} alt="" />
        <p>{etiquetas[0]?.palabra}</p>
      </div>
      <div>
        <img src={seguridad} alt="" />
        <p>{etiquetas[1]?.palabra}</p>

      </div>
      <div>
        <img src={contemplacion} alt="" />
        <p>{etiquetas[2]?.palabra}</p>

      </div>
      <div>
        <img src={confianza} alt="" />
        <p>{etiquetas[3]?.palabra}</p>

      </div>
    </div>
  );
};

export default Escudos;
