import React from "react";
import { Link } from "react-router-dom";

import olas from "../assets/olas2.png";
import logo from "../assets/logo.png";
import { BiSearchAlt2 } from "react-icons/bi";
import { GrFacebookOption } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Escudos from "./Escudos";

const Footer = () => {
  return (
    <div>
      <Escudos />

      <div style={{ marginTop: "2rem" }}>
        <img
          style={{
            width: "100%",
            height: "20rem",
            left: "0",
            position:'relative',
            objectFit: "cover",
            transform: "translateY(5.9375rem)",
            paddingTop: "2rem",
          }}
          src={olas}
          alt=""
        />

        <div className="footerContainer ">
          <div className="footerContainer_in row">
            <div
              className="col"
              style={{ width: "15.625rem", padding: "0.5rem" }}
            >
              <Link to={"/DestinoP"}>
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
              <li>AV. PREFECTURA NAVAL 270, USHUAIA</li>
              <li>+54 9 2901 581262</li>
              <li>INFO@DESTINOPATAGONIA.COM</li>
              <li>
                <ul className="IconsContainer">
                  <li>
                    <GrFacebookOption />
                  </li>
                  <li>
                    <GrInstagram />
                  </li>
                  <li>
                    <FaWhatsapp />
                  </li>
                  <li>
                    <FaLinkedinIn />
                  </li>
                </ul>
              </li>
            </ul>

            <div
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
                    <Link to={"/DestinoP"}>HOME</Link>
                  </li>
                  <li>
                    <Link to={"/servicios"}>SERVICIOS</Link>{" "}
                  </li>
                  <li>BLOG</li>
                </ul>
                <ul className="menuContainer">
                  <li>
                    {" "}
                    <Link to={"/nosotros"}>NOSOTROS</Link>{" "}
                  </li>
                  <li>GALERIA</li>
                  <li style={{ fontSize: "1.8rem" }}>
                    <BiSearchAlt2 />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className="row"
            style={{ fontSize: "0.7rem", margin: "2rem 0rem", color: "#fff" }}
          >
            <p className="col">Destino Patagonia-Derechos reservados</p>

            <p style={{ fontSize: "0.7rem" }} className="col">
              Diseño y desarrollo por Elemsoft
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
