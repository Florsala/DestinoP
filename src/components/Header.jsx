import React from "react";
import "../styles/Header.css";
import monta from "../assets/monta.png";
import wsp from "../assets/whatsapp.svg";
import lobos from "../assets/lobos_xs.jpg";
import harberton from "../assets/harberton_xs.jpg";
import pinguinos from "../assets/pinguinos_xs.jpg";

const Header = () => {
  return (
    <div>
      <div>
        <img
          className="headerImg"
          src={
            "https://destinopatagonia.com//wp-content/uploads/2021/10/2021-0626-DJI_0746-lrexport-1.jpg"
          }
          alt=""
        />
        <img className="headerImg2" src={monta} alt="mount" />

        <div className="headerTitle container-md">
          <h2 className="headerTitle_a">
            Pasión por la <span className="headerTitle_b">naturaleza</span>{" "}
          </h2>

          <h4 className="headerTitle_c">Excursiones en Ushuaia</h4>

          <div className="headerTitle_btn">
            Más info
            <img
              style={{ height: "1.5625rem", borderRadius: "50%" }}
              src={wsp}
              alt=""
            />
          </div>
        </div>

        <div className="wsp-container">
          <img className="wsp_btn" src={wsp} alt="whatsapp" />
        </div>
      </div>

      <div
        className="container-lg"
        style={{ marginTop: "17rem", textTransform: "uppercase" }}
      >
        <h1 className="display-4"  style={{ fontWeight: "600" }} >Bienvenidos a Destino Patagonia</h1>
        <h2 className="display-5" style={{ fontWeight: "400", color: "#857676" }}>
          Nuestras Excursiones
        </h2>
      </div>

      <div className="container_cards">
        <div>
          <img src={lobos} alt="lobos" />
          <p>Isla de lobos</p>
        </div>
        <div>
          <img src={harberton} alt="harberton" />
          <p>Estancia Harberton</p>
        </div>
        <div>
          <img src={pinguinos} alt="pinguinos" />
          <p>Pinguinera</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
