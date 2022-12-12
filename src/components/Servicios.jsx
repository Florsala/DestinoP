import React, { useEffect, useState } from "react";
import "../styles/Servicios.css";
import dataTours from "../data/dataTours";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Container, Spinner } from "react-bootstrap";

import monta from "../assets/monta.png";

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
        <Row
          xs={1}
          md={3}
          className="g-4 mx-5 grid_blog "
          style={{ marginTop: "2rem" }}
        >
          {items.map((items) => (
            <Col>
              <Card className="card-svs">
                <Card.Img
                  variant="top"
                  style={{ padding: "1rem" }}
                  src={items.img}
                />
                <Card.Body className="card-body">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      fontWeight: "600",
                      alignItems: "flex-start",
                    }}
                  >
                    <Card.Title style={{ color: "black", fontSize: "1.3rem" }}>
                      {items.title}
                    </Card.Title>

                    <p>{items.category}</p>
                  </div>

                  <div>
                    <p
                      style={{
                        fontWeight: "700",
                        fontSize: "1.3rem",
                        color: "#403f3f",
                      }}
                    >
                      ${items.price}
                    </p>
                    <Button className="btn_svs" variant="primary" size="lg">
                      + info
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      <img style={{ width: "100%" }} src={monta} alt="montañas" />
    </div>
  );
};

export default Servicios;
