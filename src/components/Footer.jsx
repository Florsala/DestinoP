import React, { useEffect, useState } from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

import Escudos from "./Escudos";
import { getContacto } from "../helpers/getContacto";
import IconsContainer from "./IconsContainer";

const Footer = () => {
  const [contacto, setContacto] = useState([]);

  const getInfoContacto = async () => {
    const newInfo = await getContacto();
    setContacto(newInfo);
  };

  useEffect(() => {
    getInfoContacto();
  }, []);

  return (
    <div>
      <Escudos />

      <div>
        <div className="footerContainer ">
          <div className="footerContainer_in row">
            <div
              className="col"
              style={{ width: "15.625rem", padding: "0.5rem" }}
            >
              <Link to={"/"}>
                <img style={{ height: "9.375rem" }} src={logo} alt="logo" />
              </Link>
            </div>

            <ul
              className="col"
              style={{
                fontSize: " 0.9rem",
                fontWeight: "500",
                width: "17.5rem",
                padding: "0.5rem",
              }}
            >
              <li>CONTACTO:</li>
              <li>{contacto.domicilio}</li>
              <li>{contacto.telefono}</li>
              <li>{contacto.email}</li>
              <li>
                <IconsContainer contacto={contacto} />
              </li>
            </ul>

            <div
              className="col"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "16.875rem",
                padding: "0.5rem",
              }}
            >
              <div className="menuContainer_main">
                <ul className="menuContainer">
                  <li>
                    <Link to={"/"}>HOME</Link>
                  </li>
                  <li>
                    <Link to={"/servicios"}>SERVICIOS</Link>{" "}
                  </li>
                  <li>
                    <Link to={"/blog"}>BLOG</Link>
                  </li>
                </ul>
                <ul className="menuContainer">
                  <li>
                    <Link to={"/nosotros"}>NOSOTROS</Link>{" "}
                  </li>
                  <li>
                    <Link to={"/galeria"}>GALERIA</Link>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className="row"
            style={{ fontSize: "0.7rem", margin: " 0rem", color: "#fff" }}
          >
            <p className="col">Destino Patagonia-Derechos reservados</p>

            <p style={{ fontSize: "0.7rem" }} className="col">
              Dise??o y desarrollo por Elemsoft
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
