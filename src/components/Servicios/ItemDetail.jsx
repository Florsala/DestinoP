import React, { useContext, useEffect, useState } from "react";
import "../../styles/ItemDetail.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import cartContext from "../../context/CartContext";
import ItemCount from "../ItemCount";
import SliderDestSvs from "../SliderDestSvs";
import { useFetchDestacadas } from "../../hooks/useFetchDestacadas";
import ItemDetailDate from "./ItemDetailDate";
import ItemDetailGrid from "./ItemDetailGrid";

const ItemDetail = ({ item, id }) => {
  const { excDest, loading } = useFetchDestacadas();

  const [addToCart, setAddToCart] = useState(false);

  const { addItem, addTotal } = useContext(cartContext);

  const [counter, setCounter] = useState([]);

  const [subtotal, setSubtotal] = useState(0);
  const [date, setDate]= useState('')
  const [time, setTime]= useState('')

  const Add = () => {
    setAddToCart(true);

    addItem({ item: item, quantity: counter, date:date, time:time });

    addTotal();
  };

  useEffect(() => {}, [addToCart]);

  return (
    <div>
      <Container style={{ marginTop: "10rem" }}>
        <div className="display-grid">
          <ItemDetailGrid item={item} />

          <Col>
            <div className="itemContainer">
              <h1> {item.nombre}</h1>
              <p>${item.precio}ARS</p>
            </div>

            <Container className="cont_details_main">
              {item.caracteristicas.map((car, index) => (
                <div className="cont_details" key={index}>
                  <h6>{car.nombre}:</h6>
                  <p>{car.detalle}</p>
                </div>
              ))}
            </Container>

            <Container>
              <div className="container-sm">
                <h5 className="text-uppercase font-h5">Reservar excursión</h5>
              </div>

              <div className="form-reservation">
                <div className="date-form">
                  <ItemDetailDate
                    id={id}
                    counter={counter}
                    setCounter={setCounter}
                    setDate={setDate}
                    setTime = {setTime}
                  />
                </div>
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
                  <p>Subtotal </p>
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
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Alert style={{ transition: "all 2s" }}>
                      <p>
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
          <h2 style={{ textAlign: "center" }}>Descripción</h2>
          <p
            style={{
              lineHeight: "1.4rem",
              marginTop: "1rem",
              letterSpacing: "0.00rem",
              whiteSpace: "pre-wrap",
            }}
          >
            {item.descripcion}
          </p>
        </Container>
      </Container>
      <div className="video"></div>

      <SliderDestSvs excDest={excDest} loading={loading} />
    </div>
  );
};

export default ItemDetail;