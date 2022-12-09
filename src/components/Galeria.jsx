import React from "react";
import "../styles/Galeria.css";
import "../styles/Medias.css";

import monta from "../assets/monta.png";
import ushuaia from "../assets/ush-am.jpg";
import harberton from "../assets/harberton.jpg";
import lobos from "../assets/lobos.jpg";
import ush from "../assets/ush-am.jpg";
import paisaje from "../assets/paisaje.jpg";

import { Col, Container, Row } from "react-bootstrap";

import pinguinos from "../assets/pinguinos.jpg";

const Galeria = () => {
  return (
    <div>
      <div className="hero_gal">
        <div className="heroContent_container_gal">
          <div className="heroContent_gal">
            <h1
              className="text-uppercase display-2"
              style={{ fontWeight: "600" }}
            >
              Ushuaia
            </h1>
            <h4
              style={{
                textTransform: "uppercase",
                letterSpacing: "9px",
                fontSize: "2rem",
                fontWeight: 700,
              }}
            >
              en fotos
            </h4>
          </div>
        </div>
      </div>
      {/* <div>
        <img
          className="headerImg"
          style={{ filter: "brightness(0.9)" }}
          src={ushuaia}
          alt=""
        />
        <img className="headerImg2" src={monta} alt="mount" />

        <div className="headerTitle_galeria  container-md">
          <h2
            className="text-uppercase display-2"
            style={{ fontWeight: "600" }}
          >
            Ushuaia
          </h2>
          <h4>en fotos</h4>
        </div>
      </div> */}

      <div className="galeria_title">
        <h2>Galería</h2>
      </div>

      <Container className="grid_galeria">
        <img
          style={{ width: "100%", height: "100%" }}
          className="img1"
          src={pinguinos}
          alt=""
        />
        <img className="img2" src={lobos} alt="" />
        <img className="img3" src={harberton} alt="" />
        <img className="img4" src={ush} alt="" />
        <img className="img5" src={pinguinos} alt="" />

        <img className="img6" src={lobos} alt="" />
        <img className="img7" src={harberton} alt="" />
        <img
          style={{ width: "100%", height: "100%" }}
          className="img8"
          src={paisaje}
          alt=""
        />
        <img className="img9" src={ush} alt="" />
        <img className="img10" src={pinguinos} alt="" />
      </Container>

      {/*   <Container>
      <Row>
        <Col xs={12} md={8}>
        <img style={{width:'25rem', height:'15.625rem', objectFit:'cover'}} src={pinguinos} alt="" /></Col>
      </Row>
      <Row>
      <Col><img style={{width:'12.5rem', height:'15.625rem', objectFit:'cover'}} src={pinguinos} alt="" /></Col>

        <Col><img style={{width:'12.5rem', height:'15.625rem', objectFit:'cover'}} src={pinguinos} alt="" /></Col>
        <Col><img style={{width:'12.5rem', height:'15.625rem', objectFit:'cover'}} src={pinguinos} alt="" /></Col>
        <Col><img style={{width:'12.5rem', height:'15.625rem', objectFit:'cover'}} src={pinguinos} alt="" /></Col>
      </Row>
    </Container> */}
    </div>
  );
};

export default Galeria;
