import React, { useEffect, useState } from "react";
import Iframe from "react-iframe";

import "../styles/Contacto.css";
import logo2 from "../assets/logo2.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getContacto } from "../helpers/getContacto";
import { SpinnerCustom } from "./spinner";
import { createContacto } from "../helpers/createContacto";

const Contacto = () => {
  const [contacto, setContacto] = useState([]);
  const [loading, setLoading] = useState(false);
  const [consulta, setConsulta]= useState({})

  const getInfoContacto = async () => {
    const newInfo = await getContacto();
    setContacto(newInfo);
  };

  useEffect(() => {
    getInfoContacto();
  }, []);
  const enviarConsulta = (event) => {
    event.preventDefault();
    setLoading(true);
    createContacto(consulta).then((response) => {
      setLoading(false);
      setConsulta({})
    })
  }
  const ChangeFieldValue = (event, nameField) => { setConsulta({ ...consulta, [nameField]: event.target.value }) }
  return (
    <>
      {loading && <SpinnerCustom />}
      <div>
        <div className="contacto_header container-fluid">
          <h3>CONTACTANOS PARA MÁS INFORMACIÓN</h3>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            margin: "0 auto",
            gap: "1rem",
           
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
              <li>{contacto.domicilio}</li>
              <li>{contacto.telefono}</li>
              <li>{contacto.email}</li>
            </ul>
          </div>

          <div className="contacto_form">
            <h4>Dejanos tu consulta</h4>

            <Form style={{ padding: "1rem" }} onSubmit={enviarConsulta}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control onChange={(event) => ChangeFieldValue(event, 'nombre')} type="name" placeholder="Nombre y apellido" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control onChange={(event) => ChangeFieldValue(event, 'email')} type="email" placeholder="Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control onChange={(event) => ChangeFieldValue(event, 'telefono')} type="telephone" placeholder="N° de Teléfono" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control onChange={(event) => ChangeFieldValue(event, 'detalle')} type="text" placeholder="Su consulta" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Form>
          </div>

          <div
            style={{
              display: "grid",
              placeContent: "center",
              marginBottom: "5rem",
            }}
          >
            <Iframe
              url={`https://maps.google.com/maps?q=${contacto.domicilioMapa}&z=15&output=embed`}
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
    </>
  );
};
export default Contacto;
