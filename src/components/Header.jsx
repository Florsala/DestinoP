import React, { useEffect, useState } from "react";
import "../styles/Header.css";

import "../styles/Hero.css";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

import dataTours from "../data/dataTours";

import wsp from "../assets/whatsapp.svg";
import { AiOutlineRight } from "react-icons/ai";
import { click } from "@testing-library/user-event/dist/click";

const Header = () => {
  const [items, setItems] = useState([]);

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  useEffect(() => {
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        const data = dataTours;

        resolve(data);
      }, 1500);
    });
    getItems
      .then((res) => {
        setItems(res);
      })
      .finally(() => console.log(items));
  }, [dataTours]);
  console.log(items);

  return (
    <>
      <div className="hero">
        <div className="heroContent_container">
          <div className="heroContent container-md">
            <h1 className="headerTitle_a">
              Pasión por la <span className="headerTitle_b">naturaleza</span>{" "}
            </h1>

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
      </div>

      <div className="container-lg-header">
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

      <div> <Row
    xs={1}
    md={3}
    className="g-4 mx-5 grid_blog "
    style={{ marginTop: "2rem" }}
  >
    {items.map((items) => (

        <Link to={`/servicios/${items.id}`}>
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

             
            </div>

            <div>
         
              <Button className="btn_svs" variant="primary" size="lg">
                + info
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
        
        </Link>
      
    ))}
  </Row>
</div>
    </>
  );
};

export default Header;

/* const Header = () => {
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


      
      </div>

      
    </div>
  );
};

export default Header;
 */
