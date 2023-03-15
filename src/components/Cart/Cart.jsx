import React, { useContext, useEffect, useState } from "react";
import "../../styles/Cart.css";
import { Button, Card } from "react-bootstrap";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import cartContext from "../../context/CartContext";
import Formulario from "./Formulario";
import { getListCart } from "../../helpers/getListCart";

const Cart = () => {
  let empty = "false";


  const [getList, setGetList] = useState([]);

  const getInfoCart = async () => {
    const newInfo = await getListCart();
    setGetList(newInfo);

  };

  useEffect(() => {
    getInfoCart();

  }, []);

  const { cart, clearCart, removeItem, addTotal, total, environment } = useContext(cartContext);

  const subtotal = (item) => (
    item.quantity.reduce((quantity, value) => {
      return quantity + (+value.precio.toString().replace(/,/g,'') * value.cantidad)}, 0))

  const cantidadPasajeros = (item) => (item.quantity.reduce((quantity, value) => (
    quantity + (+value.cantidad)), 0))

  const formatDate = (date) => {
    const dateSplitted = date.split('-')
    return `${dateSplitted[1]}/${dateSplitted[0]}/${dateSplitted[2]}`
  }
  return (
    <div className="CartItems">
      <div style={{ marginTop: "10rem" }}>
        <h1>Mi carrito de compras</h1>
      </div>

      <div className="Cart-container-flex">
        <div className="Cart-container ">
          {cart.map((item, index) => (



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
                  src={item.item.imagenes ? `${environment}${item.item.imagenes[0]}` : `${environment}${item.item.path}`}
                />
                <Link /* to={`/servicios/${item.item.id}`} */>
                  <Card.Title>{item.item.nombre}</Card.Title>
                </Link>
                {/*  <Card.Text>Precio: {item.item.price} ARS</Card.Text>
                   */}
                {item.item.productos ?
                  <div style={{ display: 'grid' }}>
                    <div style={{ display: 'flex' }}>
                    <Card.Text style={{ display: 'flex', marginRight:'10px' }}><span style={{ fontWeight: 'bolder', marginRight: '5px' }}>Pasajeros: </span>{cantidadPasajeros(item)}</Card.Text>
                    <Card.Text style={{ display: 'flex' }}><span style={{ fontWeight: 'bolder', marginRight: '5px' }}>Subtotal: </span>${subtotal(item)} </Card.Text>
                    </div>
                    {item.item.productos.map((p) =>
                      <div style={{ display: 'flex' }}>
                        <Card.Text style={{ display: 'flex', marginRight:'10px' }}><span style={{ fontWeight: 'bolder', marginRight: '5px' }}>Excursión: </span>{p.nombre}</Card.Text>
                        <Card.Text style={{ display: 'flex' }}><span style={{ fontWeight: 'bolder', marginRight: '5px' }}>Fecha y hora: </span> {`${formatDate(p.date)} ${p.time}`}</Card.Text>

                      </div>)}
                  </div>
                  : <><Card.Text style={{ display: 'flex' }}><span style={{ fontWeight: 'bolder', marginRight: '5px' }}>Fecha y hora: </span> {`${formatDate(item.date)} ${item.time}`}</Card.Text>
                    <Card.Text style={{ display: 'flex' }}><span style={{ fontWeight: 'bolder', marginRight: '5px' }}>Pasajeros: </span>{cantidadPasajeros(item)}</Card.Text>
                    <Card.Text style={{ display: 'flex' }}><span style={{ fontWeight: 'bolder', marginRight: '5px' }}>Subtotal: </span>${subtotal(item)}
                    </Card.Text></>}
                <Button
                  onClick={() => {
                    removeItem(item, index);
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
              <Card.Text style={{ fontWeight: '700' }}> AR$ {addTotal()}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <Formulario />
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


      </div>
    </div>
  );
};

export default Cart;
