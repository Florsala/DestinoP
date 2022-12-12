import React, { useEffect, useState } from "react";
import "../styles/Servicios.css";
import dataTours from "../data/dataTours";


import Button from "react-bootstrap/Button";
import { Container, Spinner } from "react-bootstrap";

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

        <div className="heroContent_box container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              padding: "1rem",
            }}
          >
            <div>
              <p style={{fontWeight:'700'}}>Temporada</p>
              <Button className="text-uppercase" size="md" variant="outline-dark">verano</Button>
            </div>
            <div>
              <p style={{fontWeight:'700'}}>Categoría</p>
              <Button className="text-uppercase" size="md" variant="outline-dark">Trekking</Button>
            </div>
          </div>

          <Button size="md" style={{backgroundColor: '#002669', margin:'0.5rem'}} >
            Buscar
          </Button>
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
  <ServicioItem items={items}/>
</div>

        )}

      <img style={{ width: "100%" }} src={monta} alt="montañas" />
    </div>
  );
};

export default Servicios;
