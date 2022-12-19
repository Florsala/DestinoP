import React, { useContext, useState } from "react";
import "../styles/Cart.css";
import { Button, Card, Container } from "react-bootstrap";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import cartContext from "../context/CartContext";
import Form from "react-bootstrap/Form";

const Cart = () => {
  let empty = "false";

  const [conf, setConf] = useState(false);

  const { cart, clearCart, removeItem, addTotal, total } =
    useContext(cartContext);

  return (
    <div className="CartItems">
      <div style={{ marginTop: "10rem" }}>
        <h1>Mi carrito de compras</h1>
      </div>

      <div className="Cart-container container-fluid">
        {cart.map((item) => (
          <Container >
            <Card style={{ width: "100%" }}>
              <Card.Body
                style={{
                  flexDirection: "row",
                  gap: "2rem",
                  alignItems: "center",
                }}
              >
                <Card.Img
                  variant="top"
                  style={{ padding: "1rem", width: "10rem", height: "10rem" }}
                  src={item.item.img}
                />
                <Link to={`/servicios/${item.item.id}`}>
                  <Card.Title>{item.item.title}</Card.Title>
                </Link>
                <Card.Text>Precio: {item.item.price} ARS</Card.Text>
                <Card.Text>Cantidad: {item.quantity}</Card.Text>
                <Card.Text>
                  Precio total: ${item.item.price * item.quantity}
                </Card.Text>
                <Button
                  onClick={() => {
                    removeItem(item);
                  }}
                  className="btn-supr"
                  variant="danger"
                >
                  {" "}
                  <MdDeleteOutline style={{ fontSize: "1.4rem" }} />
                </Button>
              </Card.Body>
            </Card>
          </Container>
        ))}
        <Card className="CartItems-price container">
          <Card.Body>
            <Card.Text >Total: AR$ {addTotal()}</Card.Text>
          </Card.Body>
        </Card>
      </div>

      <Form className="form-cart">
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Nombre y apellido" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          {" "}
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="telephone" placeholder="Teléfono" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={3} placeholder="Comentarios" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Confirmar reserva
        </Button>
      </Form>

      <div className="CartButtons">
        <Button
          onClick={() => {
            clearCart((empty = "true"));
          }}
        >
          Vaciar mi carrito
        </Button>

        {empty && (
          <>
            <Link to="/servicios">
              <Button color="secondary" variant="contained" m={5} size="small">
                Seguir comprando
              </Button>
            </Link>
          </>
        )}

        <Link to="/servicios">
          <Button color="primary" variant="contained" m={5} size="small">
            Finalizar compra
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
