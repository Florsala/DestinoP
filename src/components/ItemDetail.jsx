import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import cartContext from '../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {

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
        <Container style={{ marginTop: "7rem" }}>
        <Row>
          <Col className="itemContainer-img">
            <img src={item.img} alt="" />
          </Col>
          {/* <Row>
                <Col>
                <img width={'250px'} src={items.img} alt="" />
                </Col>
                <Col>
                <img width={'250px'} src={items.img} alt="" />
                </Col>
            </Row> */}
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
                  <p>$$$</p>
                </div>

                

                {
        !addToCart && (
          <div >
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
        <div  style={{display:'inline-flex', gap:'0.3125rem'}}>
          <Link to="/cart">
            <Button color="secondary" variant="outline-info" m={5} size="small">
              Finalizar Compra
            </Button>
          </Link>

          <Link to="/servicios">
            <Button variant="outline-success" color="secondary">Seguir comprando</Button>
          </Link>
        </div>
      )}

              </div>
            </Container>
          </Col>

        
        </Row>

        <Container className="text-justify">
          <h2>Descripción</h2>
          <p style={{ lineHeight: "1.75rem" }}> {item.text}</p>
        </Container>
      </Container>
    </div>
  )
}

export default ItemDetail