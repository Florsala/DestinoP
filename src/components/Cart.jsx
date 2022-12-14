import React, { useContext } from "react";
import "../styles/Cart.css";
import { Button, Card, Container } from "react-bootstrap";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import cartContext from "../context/CartContext";

const Cart = () => {
  let empty = "false";

  const { cart, clearCart, removeItem, addTotal, total } =
    useContext(cartContext);

  return (
    <div className="CartItems">
      {cart.map((item) => (
        <Container>
          <Card style={{ width: "28rem" }}>
            <Card.Body style={{ flexDirection: "column" }}>
              <Card.Title>{item.item.title}</Card.Title>
              <Card.Text>Precio: {item.item.price}  ARS</Card.Text>
              <Card.Text>Cantidad: {item.quantity}</Card.Text>
              <Card.Text>
                Precio total: ${item.item.price * item.quantity}
              </Card.Text>
              <Button  onClick={() => { removeItem(item) } } className="btn-supr" variant="danger">
                {" "}
                <MdDeleteOutline style={{ fontSize: "1.4rem" }} /> Eliminar
              </Button>
            </Card.Body>
          </Card>
        </Container>
      ))}

      <Card className="CartItems">
        <Card.Body>
          <Card.Text variant="h6">Total: AR$ {addTotal()}</Card.Text>
        </Card.Body>
      </Card>

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
