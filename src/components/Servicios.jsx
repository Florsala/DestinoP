import React, { useEffect, useState } from "react";
import "../styles/Servicios.css";
import dataTours from "../data/dataTours";
import { MdDoubleArrow } from 'react-icons/md';


import Button from "react-bootstrap/Button";
import { Container, Dropdown, Spinner } from "react-bootstrap";

import monta from "../assets/monta.png";
import ServicioItem from "./ServicioItem";

const Servicios = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        const data = dataTours;

        resolve(data);
      }, 2000);
    });
    getItems
      .then((res) => {
        setItems(res);
      })
      .finally(() => setLoading(false));
  }, [dataTours]);
  console.log(items);

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

      {loading ? (
        <>
          <Spinner
            style={{ margin: "50%", marginTop: "200px" }}
            /*  animation="border" */
            variant="primary"
            animation="grow"
          />
        </>
      ) : (
        <div>
          <ServicioItem items={items} />
        </div>
      )}

      <div className="heroContent_box container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            padding: "1rem",
          }}
        >
          <Dropdown>
            <p style={{ fontWeight: "700" }}>Temporada</p>
            <Dropdown.Toggle
              className="text-uppercase dropdw-svs"
              variant="outline-secondary"
              size="md"
              id="dropdown-basic"
            >
              todas{" "}
            </Dropdown.Toggle>

            <Dropdown.Menu className="text-uppercase ">
              <Dropdown.Item href="#/action-1">Verano</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Invierno</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Todo el año</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <p style={{ fontWeight: "700" }}>Categoría</p>
            <Dropdown.Toggle
              className="text-uppercase dropdw-svs"
              variant="outline-secondary"
              size="md"
              id="dropdown-basic"
            >
              todas{" "}
            </Dropdown.Toggle>

            <Dropdown.Menu className="text-uppercase">
              <Dropdown.Item href="#/action-1">Verano</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Invierno</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Todo el año</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
        </div>

        <Button
        className="btn-search"
          size="md"
         
        >
          Buscar
          <MdDoubleArrow style={{margin: '0.2rem'}}/>
        </Button>
      </div>
    </div>
  );
};

export default Servicios;
