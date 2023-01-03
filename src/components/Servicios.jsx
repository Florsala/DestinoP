import React from "react";
import "../styles/Servicios.css";

import { Container } from "react-bootstrap";

import ServicioItem from "./ServicioItem";
import ServiciosSearch from "./ServiciosSearch";

const Servicios = () => {
  return (
    <div>
      <div className="hero_svs">
        <div className="heroContent_container_svs">
          <div className="headerTitle_svs container-md">
            <h2 className="headerTitle_a_svs">
              Excursiones en el
              <span className="headerTitle_b_svs"> Fin del Mundo</span>{" "}
            </h2>
          </div>
        </div>
      </div>

      <div className="container-lg-svs">
        <h1 className="display-5" style={{ fontWeight: "700" }}>
          Prepárate para vivir uno de los más lindos momentos en el fin del
          mundo
        </h1>
        <h2
          className="container-sm"
          style={{
            fontWeight: "400",
            fontSize: "1.5rem",
            maxWidth: "54",
            textAlign: "center",
          }}
        >
          Destino Patagonia, desea que tu experiencia sea cálida y
          personalizada, por lo que la tripulación y el guía estarán pendientes
          de que así sea.{" "}
        </h2>
      </div>

      <Container
        style={{
          textTransform: "uppercase",
          color: " #2c3e53",
        }}
      >
        <h4 style={{ fontSize: "2rem" }}>Excursiones destacadas</h4>
      </Container>

      <ServicioItem />
      <ServiciosSearch/>

      
    </div>
  );
};

export default Servicios;
