import React, { useContext, useState } from "react";
import "../../styles/Cart.css";
import { Button, Card } from "react-bootstrap";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import cartContext from "../../context/CartContext";
import Formulario from "./Formulario";

const Cart = () => {
  let empty = "false";

  //const [conf, setConf] = useState(false);

  const { cart, clearCart, removeItem, addTotal, total } =
    useContext(cartContext);

  return (
    <div className="CartItems">
      <div style={{ marginTop: "10rem" }}>
        <h1>Mi carrito de compras</h1>
      </div>

      <div className="Cart-container-flex">
        <div className="Cart-container ">
          {cart.map((item) => (
            
            

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
                    src={item.item.imagenes[1]}
                  />
                  <Link /* to={`/servicios/${item.item.id}`} */>
                    <Card.Title>{item.item.nombre}</Card.Title>
                  </Link>
                  {/*  <Card.Text>Precio: {item.item.price} ARS</Card.Text>
                   */}
                  <Card.Text>Fecha y hora: </Card.Text>
                  <Card.Text>Pasajeros: {item.quantity}</Card.Text>
                  <Card.Text>
                    Subtotal: ${+item.item.precio.replace(',','') * item.quantity}
                  </Card.Text>
                  <Button
                    onClick={() => {
                      removeItem(item);
                    }}
                    className="btn-supr"
                    variant="danger"
                  >
                    
                    <MdDeleteOutline style={{ fontSize: "1.4rem" }} />
                  </Button>
                </Card.Body>
              </Card>
            
          ))}
        </div>

        <div>
          <Card className="CartItems-price ">
            <Card.Body>
              <Card.Text>Total: </Card.Text>
              <Card.Text style={{fontWeight:'700'}}> AR$ {addTotal()}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
<Formulario/>

      <div className="CartButtons">
        <Button
        variant="danger"
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
