import React from "react";
import Iframe from "react-iframe";

import "../styles/Contacto.css";
import logo2 from "../assets/logo2.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contacto = () => {
  return (
    <div>
      <div className="contacto_header container-fluid">
        <h3>CONTACTANOS PARA MÁS INFORMACIÓN</h3>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          marginBottom: "3rem",
        }}
      >
        <div style={{ width: "31.25rem", padding: "1rem", margin: "1rem" }}>
          <img style={{ height: "14rem" }} src={logo2} alt="logo" />
          <ul
            style={{
              fontSize: "1.3rem",
              fontWeight: "500",
              color: "var(--grey-color)",
              margin: "1rem",
              listStyle: "none",
              padding: "0",
            }}
          >
            <li>CONTACTO:</li>
            <li>AV. PREFECTURA NAVAL 270, USHUAIA</li>
            <li>+54 9 2901 581262</li>
            <li>INFO@DESTINOPATAGONIA.COM</li>
          </ul>
        </div>

        <div className="contacto_form">
          <h4>Dejanos tu consulta</h4>

          <Form style={{ padding: "1rem" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="name" placeholder="Nombre y apellido" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="telephone" placeholder="N° de Teléfono" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="text" placeholder="Su consulta" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </div>
      </div>

      <div style={{ display: "grid", placeContent: "center", marginBottom:'5rem' }}>
        <Iframe
          url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d73583.02971976562!2d-68.302803!3d-54.806863!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbc4c22b5bad109bf%3A0x5498473dba43ebfc!2sUshuaia%2C%20Tierra%20del%20Fuego!5e0!3m2!1ses!2sar!4v1670891172155!5m2!1ses!2sar"
          width="800px"
          height="500px"
          id=""
          className="mapa"
          display="block"
          position="relative"
        />
      </div>
    </div>
  );
};

export default Contacto;
