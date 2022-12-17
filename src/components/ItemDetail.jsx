import React, { useContext, useEffect, useState } from "react";
import "../styles/ItemDetail.css";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import cartContext from "../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const [addToCart, setAddToCart] = useState(false);

  const { addItem, addTotal } = useContext(cartContext);

  const [counter, setCounter] = useState(1);

  const Add = () => {
    setAddToCart(true);

    addItem({ item: item, quantity: counter });

    addTotal();
  };

  useEffect(() => {
    console.log(addToCart, "agregado");
  }, [addToCart]);

  return (
    <div>
      <Container style={{ marginTop: "10rem" }}>
        <div className="display-grid">
          <div className="container-md container-grid-img">
            <img className="span-3" src={item.img} alt="" />

            <img src={item.img} alt="" />
            <img src={item.img} alt="" />
            <img src={item.img} alt="" />
            <img src={item.img} alt="" />
            <img src={item.img} alt="" />
            <img src={item.img} alt="" />
          </div>

          <Col>
            <div className="itemContainer">
              <h1>{item.title}</h1>
              <p>${item.price}ARS</p>
            </div>

            <Container>
              <div>
                <p>Temporada:</p>
                <p>Lugar y salida:</p>
                <p>Idioma:</p>
              </div>

              <div>
                <p>Duración:</p>
                <p>Dificultad:</p>
                <p>Observación:</p>
              </div>
            </Container>
            <Container>
              <div className="container-sm">
                <h5 className="text-uppercase">Reservar excursion</h5>
              </div>

              <div>
              <p>fecha</p>
                <p>hora</p>
                
              </div>

              <div className="containerItem-total container-fluid">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    borderBottom: "1px solid",
                    width: "80%",
                    margin: " 0 auto",
                    fontSize: "1.2rem",
                    color: "grey",
                  }}
                >
                  <p>Subtotal</p>
                  <p>$$$</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "80%",
                    margin: " 0 auto",
                    fontSize: "1.2rem",
                    color: "grey",
                  }}
                >
                  <p className="text-uppercase">total a pagar</p>
                  <p>${addTotal()}</p>
                </div>

                {
                  !addToCart && (
                    <div>
                      <ItemCount
                        Add={Add}
                        counter={counter}
                        setCounter={setCounter}
                      />
                    </div>
                  )

                  //funcion agregar carrito
                }

                {addToCart && (
                  <div
                    style={{
                      display: "flex",
                      gap: "0.3125rem",
                      justifyContent: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                   
                    <Alert style={{transition:'all 2s'}}>
                      <p >
                        Su excursión fue agregada al carrito{" "}
                        <span>
                          <IoMdCheckmarkCircleOutline
                            style={{ fontSize: "1.2rem" }}
                          />
                        </span>
                      </p>
                    </Alert>
                    <div style={{ gap: "1rem", display: "flex" }}>
                      <Link to="/cart">
                        <Button
                          color="secondary"
                          variant="outline-info"
                          m={5}
                          size="small"
                        >
                          Finalizar Compra
                        </Button>
                      </Link>

                      <Link to="/servicios">
                        <Button variant="outline-success" color="secondary">
                          Seguir comprando
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </Container>
          </Col>
        </div>

        <Container className="text-justify">
          <h2>Descripción</h2>
          <p style={{ lineHeight: "1.75rem" }}> {item.text}</p>
        </Container>
      </Container>
    </div>
  );
};

export default ItemDetail;
