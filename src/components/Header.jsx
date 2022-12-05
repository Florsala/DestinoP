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

       
      </div>

      <div
        className="container-lg"
      >
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

      <div className="container">
        <div className="card img-fluid container_cards">
          <img className="card-bottom" src={lobos} alt="lobos" />
          <div className="card-img-overlay">
            <h5 className="card-title"> Isla de Lobos</h5>
            <p className="card-text">
              Durante tu visita al Fin del Mundo no te pierdas la oportunidad de
              navegarlas míticas aguas del Canal Beagle, en una experiencia que
              te llevará a imaginar aquellas historuas de los primeros
              navegantes que surcaban estos mares.
            </p>

            <a
              style={{
                color: "#fff",
                textTransform: "uppercase",
                fontWeight: "600",
              }}
              
              class="btn btn-basic"
            >
              más info
            </a>
          </div>
        </div>

        <div className="card img-fluid container_cards">
          <img className="card-bottom" src={harberton} alt="harberton" />
          <div className="card-img-overlay">
            <h5 className="card-title"> Estancia Harberton</h5>
            <p className="card-text">
              Durante tu visita al Fin del Mundo no te pierdas la oportunidad de
              navegarlas míticas aguas del Canal Beagle, en una experiencia que
              te llevará a imaginar aquellas historuas de los primeros
              navegantes que surcaban estos mares.
            </p>

            <a
              style={{
                color: "#fff",
                textTransform: "uppercase",
                fontWeight: "600",
              }}
             
              class="btn btn-basic"
            >
              más info
            </a>
          </div>
        </div>

        <div className="card img-fluid container_cards">
          <img className="card-bottom" src={pinguinos} alt="pinguinos" />
          <div className="card-img-overlay">
            <h5 className="card-title"> Pinguinera</h5>
            <p className="card-text">
              Durante tu visita al Fin del Mundo no te pierdas la oportunidad de
              navegarlas míticas aguas del Canal Beagle, en una experiencia que
              te llevará a imaginar aquellas historuas de los primeros
              navegantes que surcaban estos mares.
            </p>

            <a
              style={{
                color: "#fff",
                textTransform: "uppercase",
                fontWeight: "600",
              }}
              
              class="btn btn-basic"
            >
              más info
            </a>
          </div>
        </div>


        <div className="wsp-container">
          <img className="wsp_btn" src={wsp} alt="whatsapp" />
        </div>
      </div>

      
    </div>
  );
};

export default Header;
