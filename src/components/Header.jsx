import React, { useEffect, useState } from "react";
import "../styles/Header.css";
import "../styles/Hero.css";

import wsp from "../assets/whatsapp.svg";
import { useFetchDestacadas } from "../hooks/useFetchDestacadas";
import SliderDestacadas from "./SliderDestacadas";
import { Link } from "react-router-dom";
import { getContacto } from "../helpers/getContacto";

const Header = () => {
  const { excDest, loading } = useFetchDestacadas();

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
              Pasión por la <span className="headerTitle_b">naturaleza</span>{" "}
            </h1>

            <h4 className="headerTitle_c">Excursiones en Ushuaia</h4>
            <a
              href={`https://wa.me/${contacto.whatsapp?.replace(
                /[^\w]/gi,
                ""
              )} `}
              target={"blank"}
            >
              <div className="headerTitle_btn">
                Más info
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
          Bienvenidos a Destino Patagonia
        </h1>
        <h2
          className="display-5"
          style={{ fontWeight: "400", color: "#857676" }}
        >
          Nuestras Excursiones
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
