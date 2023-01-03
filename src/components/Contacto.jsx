import React, { useEffect, useState } from "react";
import Iframe from "react-iframe";

import "../styles/Contacto.css";
import logo2 from "../assets/logo2.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contacto = () => {

  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);


useEffect(() => {
  fetch("http://turismo.elemsoft.net/webapi/api/Contactos/GetList")
  .then(res => res.json())
  .then(
    (result) => {
      setLoading(true);
      setItems(result);
      

  },
  (error) => {
    setLoading(true);
    setError(error);

  }
  )
}, [])

if(error){
  return <div>ha surgido un error</div>
}  else {


  return (
    <div>
      <div className="contacto_header container-fluid">
        <h3>CONTACTANOS PARA MÁS INFORMACIÓN</h3>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: '0 auto',
          gap:'1rem',
          width: '75rem'
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
            <li>{items.domicilio}</li>
            <li>Teléfono:{items.telefono}</li>
            <li>{items.email}</li>
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

        <div style={{ display: "grid", placeContent: "center", marginBottom:'5rem' }}>
        <Iframe
          url="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d4599.0574801462235!2d-68.31121407226286!3d-54.80582513767617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0xbc4c23206cffed97%3A0x8e62054b784cea34!2s25%20de%20Mayo%20217%2C%20V9410DFE%20Ushuaia%2C%20Tierra%20del%20Fuego!3m2!1d-54.805831399999995!2d-68.30683669999999!5e0!3m2!1ses-419!2sar!4v1672199290471!5m2!1ses-419!2sar"
          width="1000px"
          height="500px"
          id=""
          className="mapa"
          display="block"
          position="relative"
        />
      </div>
      </div>

    
    </div>
  );
};
};
export default Contacto;
