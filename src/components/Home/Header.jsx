import React, { useContext, useEffect, useState } from "react";
import "../../styles/Header.css";
import "../../styles/Hero.css";

import wsp from "../../assets/whatsapp.svg";
import { useFetchDestacadas } from "../../hooks/useFetchDestacadas";
import SliderDestacadas from "../SliderDestacadas";
import { Link } from "react-router-dom";
import { getContacto } from "../../helpers/getContacto";
import cartContext from "../../context/CartContext";

const Header = () => {
  const { excDest, loading } = useFetchDestacadas();
  const [etiquetas, setEtiquetas] = useState([]);
  const { idioma, getIdiomaSeccion } = useContext(cartContext);
  useEffect(() => {
    setEtiquetas(getIdiomaSeccion("Home"));
  }, [idioma]);

  const [contacto, setContacto] = useState([]);

  const getInfoContacto = async () => {
    const newInfo = await getContacto();
    setContacto(newInfo);
  };

  useEffect(() => {
    getInfoContacto();
  }, []);

  return (
    <>
      <div className="hero">
        <div className="heroContent_container">
          
        </div>
      </div>

      <div className="container-lg-header">
        <h1 className="display-4" style={{ fontWeight: "600" }}>
        {etiquetas[4]?.palabra.toUpperCase()}
        </h1>
        <h2
          className="display-5"
          style={{ fontWeight: "400", color: "#857676" }}
        >
          {etiquetas[5]?.palabra.toUpperCase()}
        </h2>
      </div>

      <div>
        <SliderDestacadas excDest={excDest} loading={loading} />
      </div>
    </>
  );
  /* } */
};

export default Header;
