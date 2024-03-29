import React, { useContext, useEffect, useState } from "react";
import "../../styles/ItemDetail.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import cartContext from "../../context/CartContext";
import ItemCount from "./ItemCount";
import SliderDestSvs from "../SliderDestSvs";
import { useFetchDestacadas } from "../../hooks/useFetchDestacadas";
import ItemDetailDate from "./ItemDetailDate";
import ItemDetailGrid from "./ItemDetailGrid";
import { getTarifasPaquete } from "../../helpers/getPaquetes";
import { formatDate } from "../utils/dateFormat";
import Form from "react-bootstrap/Form";
import { Spinner } from "react-bootstrap";
import ItemDetailTime from "./ItemDetailTime";
import { handleInputTarifa } from "../utils/handleInputTarifa";
import DocumentMeta from "react-document-meta";
import  ItemDetailTimePackage  from "./itemDetailTimePackage";

const ItemDetail = ({ item, id, isPaquete }) => {
  const { excDest, loading } = useFetchDestacadas();
  const [loadingTarifas, setLoadingTarifas] = useState(true);

  const [addToCart, setAddToCart] = useState(false);

  const { addItem, addTotal, environment, idioma, getIdiomaSeccion } = useContext(cartContext);

  const [counter, setCounter] = useState([]);
  const [subtotalValue, setSubtotalValue] = useState(0)
  const [price, setPrice] = useState([]);
  const [meta, setMeta] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [etiquetasExcursion, setEtiquetasExcursion] = useState([]);
  const [etiquetasPaquete, setEtiquetasPaquete] = useState([]);
  useEffect(() => {
    setEtiquetasExcursion(getIdiomaSeccion("Excursiones Detalle"));
    setEtiquetasPaquete(getIdiomaSeccion("Paquetes Detalle"));
  }, [idioma]);
  useEffect(() => {
    if (counter.length) {
      setSubtotalValue(
        counter.reduce((quantity, value) => (
          quantity + (value.precio * +value.cantidad)), 0)
      )
    }



  }, [counter])
  const setDateProduct = (date, product) => {

    if (date)
    product['date'] = date


  }
  const total = (item) => (
    item.reduce((quantity, value) => (
      quantity + (+value.precio.toString().replace(/,/g, '') * value.cantidad)), 0))
  const Add = () => {
    setAddToCart(true);

    addItem({ item: item, quantity: counter, date: date, time: time });

    addTotal();
  };
 
  const handleInput = (e, item) => {
    const tarifas = handleInputTarifa(e, item, counter)

    setCounter(tarifas);
  };
 
  useEffect(() => {
    const date = new Date()
    if (isPaquete) getTarifasPaquete(1, id, formatDate(date)).then((response) => {
      setPrice(response.data.msg)
      setLoadingTarifas(false)
    })
    setDate('')
    setTime('')
    setCounter([])

  }, [item]);
  useEffect(() => {
    if(item)
    setMeta({
      title: item.seoTitle,
      description: item.seoDescripcion,
      meta: {
        charset: 'utf-8',
        name: {
          keywords: item.seoKeyword
        }
      }
    })
  }, [item])

  return (<>
    <DocumentMeta {...meta} />

   {item && <div>
      <Container style={{ marginTop: "10rem" }}>
        <div className="display-grid">
          <ItemDetailGrid item={item} isPaquete={isPaquete} />

          <Col>
            <div className="itemContainer">
              <h1> {item?.nombre}</h1>
              {/* <p>${item?.precio}ARS</p> */}
            </div>

            <Container className="cont_details_main">
              {!isPaquete &&

                item.caracteristicas.map((car, index) => (
                  <div className="cont_details" key={index}>
                    <h4>{car.nombre}:</h4>
                    <p className="h5">{car.detalle}</p>
                  </div>
                ))}
            </Container>

            <Container>
              <div className="container-sm">
                <h5 className="text-uppercase font-h5">{!isPaquete ? etiquetasExcursion[0]?.palabra : etiquetasPaquete[0]?.palabra}</h5>
              </div>
              {item && price.productos && item.productos ?
                <Container className="cont_details_main">
                  {item.productos.map((p, index) => {

                    const producto = price.productos.filter((prod) => prod.productoId === p.id)[0]

                    return <div className="form-reservation mb-4" key={index}>
                      <h6><span className="h5" style={{ fontWeight: 'bolder', marginRight: '5px' }}>{etiquetasPaquete[8]?.palabra}: </span><span>{p.nombre}</span></h6>
                      <h6><span className="h5" style={{ fontWeight: 'bolder', marginRight: '5px' }}>{etiquetasPaquete[9]?.palabra}: </span><span>{p.categoria}</span></h6>
                      <div className="date-form">
                        <ItemDetailDate
                          id={id}
                          counter={counter}
                          setCounter={setCounter}
                          setDate={(d) => setDateProduct(d, p)}
                          isPaquete={true}
                        />
                        <div className="time-form">
                          <div>

                            {producto && producto.horarios.map((radio, idx) => <ItemDetailTimePackage radio={radio} idx={idx} index={index} p={p} setTime={setTime}/>/*(
                              <ButtonGroup>
                                <ToggleButton
                                  key={idx}
                                  id={`${index}-${idx}`}
                                  type="radio"
                                  variant={idx % 2 ? 'outline-dark' : 'outline-dark'}
                                  name={index}
                                  value={radio.hora}
                                  checked={setValue(p, radio.hora)}
                                  onClick={(e) => { setTimeProduct(e.target.innerHTML.substring(0, 5), p); setTime(e.target.innerHTML.substring(0, 5)) }}
                                >
                                  {radio.hora}
                                </ToggleButton>
                              </ButtonGroup>) */
                            )}

                          </div>
                        </div>
                      </div>

                    </div>
                  }

                  )}
                  <div className="container_tarifas mb-4">
                    {loadingTarifas && <Spinner />}
                    {price.tarifas &&
                      price.tarifas.map((item, index) => (
                        <div className="quantity-form_container" key={index} style={{ color: "#6573a4",fontSize:'medium' }}>
                          {item.tipo} ${item.importe} 
                          <Form.Select
                            size="sm"
                            aria-label={item.tipo}
                            name={item.importe}
                            onChange={(e) => handleInput(e, item)}
                          >
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                          </Form.Select>

                        </div>
                      ))}
                  </div>
                </Container> :
                <div className="form-reservation">
                  <div className="date-form">
                    <ItemDetailDate
                      id={id}
                      counter={counter}
                      setCounter={setCounter}
                      setDate={setDate}
                      setTime={setTime}
                    />
                  </div>
                </div>
              }
              <div className="containerItem-total container-fluid">
                <div
                  style={{
                    display: "flex",
                    borderBottom: "1px solid",
                    width: "80%",
                    margin: " 0 auto",
                    fontSize: "1.2rem",
                    color: "#6573a4",
                  }}
                  className='align-items-start flex-column'
                >
                  <p style={{ fontSize: 'larger' }}>{etiquetasExcursion[3]?.palabra}</p>
                  <div className="text-start">{counter.map((c) => (
                    <p style={{ fontSize: 'medium' }}>{c.nombre}: ${+c.precio.toString().replace(/,/g, '') * c.cantidad}</p>
                  ))}</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "80%",
                    margin: " 0 auto",
                    fontSize: "1.2rem",
                    color: "#6573a4",
                  }}
                >
                  <p className="text-uppercase">{etiquetasExcursion[4]?.palabra}</p>
                  <p>${total(counter)}</p>
                </div>

                {
                  !addToCart && (
                    <div>
                      <ItemCount
                        Add={Add}
                        counter={counter}
                        setCounter={setCounter}
                        date={date}
                        time={time}
                        isPaquete={isPaquete}
                        productos={isPaquete ? item.productos : []}
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
                        {!isPaquete? etiquetasExcursion[9]?.palabra: etiquetasPaquete[10]?.palabra}{" "}
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
                          {etiquetasExcursion[10]?.palabra}
                        </Button>
                      </Link>

                      <Link to="/servicios">
                        <Button variant="outline-success" color="secondary">
                        {etiquetasExcursion[11]?.palabra}
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </Container>
          </Col>
        </div>

        <Container className="text-justify flex-column">
          <h2 style={{ textAlign: "center" }}>{etiquetasExcursion[7]?.palabra}</h2>
          <p
            style={{
              lineHeight: "1.4rem",
              marginTop: "1rem",
              letterSpacing: "0.00rem",
              whiteSpace: "pre-wrap",
            }}
            className='text-center'
          >
            {item.descripcion}
          </p>
        </Container>
      </Container>
      <div className="video"></div>

      {!isPaquete && <SliderDestSvs excDest={excDest} loading={loading} />}
    </div>}
  </>
  );
};

export default ItemDetail;
