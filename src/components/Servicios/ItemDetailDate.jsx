import React, { useContext, useEffect, useState } from "react";

import Datepicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";

import { getTarifas } from "../../helpers/getTarifas";
import { Spinner } from "react-bootstrap";
import { GoCalendar } from "react-icons/go";
import { GoClock } from "react-icons/go";
import Form from "react-bootstrap/Form";

import ItemDetailTime from "./ItemDetailTime";
import { handleInputTarifa } from "../utils/handleInputTarifa";
import { formatDate } from "../utils/dateFormat";
import cartContext from "../../context/CartContext";

registerLocale("es", es);

const ItemDetailDate = ({ id, counter, setCounter, setDate, setTime, isPaquete }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [price, setPrice] = useState([]);
  const [loading, setLoading] = useState(true);

  const [select, setSelect] = useState(false);

  const [cantidades, setCantidades] = useState({})
  const [etiquetas, setEtiquetas] = useState([]);
  const {idioma, getIdiomaSeccion } = useContext(cartContext);


  useEffect(() => {
    setEtiquetas(getIdiomaSeccion("Excursiones Detalle"));
  }, [idioma]);

  const getTarifaHora = async () => {
    const newTarifa = await getTarifas({ id, selectedDate });
    setPrice(newTarifa);
    setLoading(false);

  };

  useEffect(() => {
    if(!isPaquete)  getTarifaHora();
  }, [selectedDate]);

  useEffect(()=>{
    setSelectedDate('')
  },[id])


  const changeDate = (date) => {
    setDate(formatDate(date))
    setSelectedDate(date);
  };
  
  const handleInput = (e, item) => {
  
    const tarifas = handleInputTarifa(e,item,counter)
      setCounter(tarifas);
    setSelect(true);

    setCantidades(price.tarifas.reduce((result, tarifa) => {
      result[tarifa.tipo] = 0

      console.log(result, 'result')

      return result
    }, {}))





  };

  return (
    <>
      <div style={{ marginBottom: "2rem" }}>
        <p>
        {etiquetas[1]?.palabra}
          <span style={{ fontSize: " 1.2rem", padding: "5px" }}>
            <GoCalendar />
          </span>
        </p>

        <Datepicker
          locale={es}
          selected={selectedDate}
          style={{ zIndex: "2" }}
          dateFormat="dd/MM/yyyy"
          placeholderText="__/__/__"
          onChange={changeDate}
          minDate={new Date()}
          showDisabledMonthNavigation
        />
      </div>
      {selectedDate && !isPaquete && (
        <div className="container_tarifas">
          {loading && <Spinner />}
          {price.tarifas &&
            price.tarifas.map((item, index) => (
              <div className="quantity-form_container" key={index} style={{color:"#6573a4"}}>
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
      )}
      <div className="time-form_container">
      
        {!!selectedDate && !isPaquete && (
          <div>
            <p>
            {etiquetas[2]?.palabra}
            <span style={{ fontSize: " 1.2rem", padding: "5px" }}>
              <GoClock />
            </span>
          </p>
         
          <div className="time-form">
            <ItemDetailTime id={id} price={price} setTime={setTime}/>
          </div>
          </div>
        )}
      </div>

    </>
  );
};

export default ItemDetailDate;
