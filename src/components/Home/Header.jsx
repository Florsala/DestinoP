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
          <div className="heroContent container-md">
            <h1 className="headerTitle_a">
              {etiquetas[0]?.palabra.toUpperCase()} <span className="headerTitle_b">{etiquetas[1]?.palabra}</span>{" "}
            </h1>

            <h4 className="headerTitle_c">{etiquetas[2]?.palabra.toUpperCase()}</h4>
            <a
              href={`https://wa.me/${contacto.whatsapp?.replace(
                /[^\w]/gi,
                ""
              )} `}
              target={"blank"}
            >
              <div className="headerTitle_btn">
              {etiquetas[3]?.palabra.toUpperCase()}
                <img
                  style={{ height: "1.5625rem", borderRadius: "50%" }}
                  src={wsp}
                  alt=""
                />
              </div>
            </a>
          </div>
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
