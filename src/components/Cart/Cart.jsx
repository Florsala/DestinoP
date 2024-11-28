import React, { useContext, useEffect, useState } from "react";
import "../../styles/Cart.css";
import { Button, Card } from "react-bootstrap";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import cartContext from "../../context/CartContext";
import Formulario from "./Formulario";
import { getListCart } from "../../helpers/getListCart";

const Cart = () => {
  const { cart, clearCart, removeItem, addTotal, total, environment, idioma, getIdiomaSeccion } = useContext(cartContext);
  let empty = "false";
console.log('hola')
  const [etiquetas, setEtiquetas] = useState([]);
  useEffect(() => {
    setEtiquetas(getIdiomaSeccion("Carrito"));
  }, [idioma]);
  const [getList, setGetList] = useState([]);

  const getInfoCart = async () => {
    const newInfo = await getListCart();
    setGetList(newInfo);

  };

  useEffect(() => {
    getInfoCart();

  }, []);

  

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
        <h1>{etiquetas[0]?.palabra}</h1>
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
                  src={item.item.imagenes ? `${item.item.imagenes[0].path}` : `${item.item.path}`}
                />
                <Link /* to={`/servicios/${item.item.id}`} */>
                  <Card.Title>{item.item.nombre}</Card.Title>
                </Link>
                {/*  <Card.Text>Precio: {item.item.price} ARS</Card.Text>
                   */}
                {item.item.productos ?
                  <div style={{ display: 'grid' }}>
                    <div style={{ display: 'flex' }}>
                    <Card.Text style={{ display: 'flex', marginRight:'10px' }}><span style={{ fontWeight: 'bolder', marginRight: '5px' }}>{etiquetas[2]?.palabra}: </span>{cantidadPasajeros(item)}</Card.Text>
                    <Card.Text style={{ display: 'flex' }}><span style={{ fontWeight: 'bolder', marginRight: '5px' }}>Subtotal: </span>${subtotal(item)} </Card.Text>
                    </div>
                    {item.item.productos.map((p) =>
                      <div style={{ display: 'flex' }}>
                        <Card.Text style={{ display: 'flex', marginRight:'10px' }}><span style={{ fontWeight: 'bolder', marginRight: '5px' }}>{etiquetas[13]?.palabra}: </span>{p.nombre}</Card.Text>
                        <Card.Text style={{ display: 'flex' }}><span style={{ fontWeight: 'bolder', marginRight: '5px' }}>{etiquetas[1]?.palabra}: </span> {`${formatDate(p.date)} ${p.time}`}</Card.Text>

                      </div>)}
                  </div>
                  : <><Card.Text style={{ display: 'flex' }}><span style={{ fontWeight: 'bolder', marginRight: '5px' }}>{etiquetas[1]?.palabra}: </span> {`${formatDate(item.date)} ${item.time}`}</Card.Text>
                    <Card.Text style={{ display: 'flex' }}><span style={{ fontWeight: 'bolder', marginRight: '5px' }}>{etiquetas[2]?.palabra}: </span>{cantidadPasajeros(item)}</Card.Text>
                    <Card.Text style={{ display: 'flex' }}><span style={{ fontWeight: 'bolder', marginRight: '5px' }}>{etiquetas[3]?.palabra}:: </span>${subtotal(item)}
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
              <Card.Text>{etiquetas[4]?.palabra}: </Card.Text>
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
         {etiquetas[9]?.palabra}
        </Button>

        {empty && (
          <>
            <Link to="/servicios">
              <Button color="secondary" variant="contained" m={5} size="small">
              {etiquetas[10]?.palabra}
              </Button>
            </Link>
          </>
        )}


      </div>
    </div>
  );
};

export default Cart;
