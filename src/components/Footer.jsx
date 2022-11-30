import React from "react";
import olas from "../assets/olas2.png";
import logo from "../assets/logo.png";
import { BiSearchAlt2 } from "react-icons/bi";
import { GrFacebookOption } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <img
        style={{
          width: "100%",
          height: "20rem",
          left: "0",
          position: "relative",
          objectFit: "cover",
          transform: 'translateY(95px)'
        }}
        src={olas}
        alt=""
      />
      

      <div className="footerContainer">

        <div className="footerContainer_in">

        <div style={{ width: "250px", padding:'0.5rem' }}>
          <img style={{ height: "150px" }} src={logo} alt="logo" />
        </div>

        <ul style={{ fontSize: " 0.9rem", fontWeight: "500", width: '17.5rem',
    padding: '0.5rem' }}>
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
          <li style={{ fontSize: "0.7rem" }}>
            Destino Patagonia-Derechos reservados
          </li>
        </ul>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: '16.875rem',
            padding: '0.5rem'
          }}
        >
          <div className="menuContainer_main">
            <ul className="menuContainer">
              <li>HOME</li>
              <li>EXCURSIONES</li>
              <li>BLOG</li>
            </ul>
            <ul className="menuContainer">
              <li>NOSOTROS</li>
              <li>GALERIA</li>
              <li style={{ fontSize: "1.8rem" }}>
                <BiSearchAlt2 />
              </li>
            </ul>
          </div>

          <p style={{ fontSize: "0.7rem" }}>Diseño y desarrollo por Elemsoft</p>
        </div>
      </div>


        </div>
        
        
    </div>
  );
};

export default Footer;
