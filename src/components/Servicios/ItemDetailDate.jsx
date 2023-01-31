import React, { useEffect, useState } from "react";

import Datepicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";

import { getTarifas } from "../../helpers/getTarifas";
import { Spinner } from "react-bootstrap";
import { GoCalendar } from "react-icons/go";
import { GoClock } from "react-icons/go";
import { format } from "date-fns";
import Form from "react-bootstrap/Form";

import ItemDetailTime from "./ItemDetailTime";

registerLocale("es", es);

const ItemDetailDate = ({ id, counter, setCounter }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [price, setPrice] = useState([]);
  const [loading, setLoading] = useState(true);

  const [select, setSelect] = useState(false);

  const [cantidades, setCantidades] = useState({})

  const getTarifaHora = async () => {
    const newTarifa = await getTarifas({ id, selectedDate });
    setPrice(newTarifa);
    setLoading(false);

  };

  useEffect(() => {
    getTarifaHora();

    
  }, [selectedDate]);


  const changeDate = (date) => {
    setSelectedDate(date);
    console.log(selectedDate);
  };

  const handleInput = (e) => {
    setCounter(e.target.value);
    setSelect(true);

    setCantidades(price.tarifas.reduce((result, tarifa) => {
      result[tarifa.tipo] = 0
      return result
  }, {}))

  
  console.log(cantidades, "cantidades");


    let reserva = {
      tipo: e.target.ariaLabel,
      cantidad: e.target.value,
      precio: e.target.name,
      subtotal: e.target.name * e.target.value,
    };

   // console.log(reserva, "reserva");
  };

  return (
    <>
      <div style={{ marginBottom: "2rem" }}>
        <p>
          fecha
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
      {!!selectedDate && (
        <div className="container_tarifas">
          {loading && <Spinner />}
          {price.tarifas &&
            price.tarifas.map((item, index) => (
              <div className="quantity-form_container" key={index}>
                {item.tipo} ${item.importe}
                <Form.Select
                  size="sm"
                  aria-label={item.tipo}
                  name={item.importe}
                  onChange={handleInput}
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
        <p>
          horario
          <span style={{ fontSize: " 1.2rem", padding: "5px" }}>
            <GoClock />
          </span>
        </p>
        {!!selectedDate && (
          <div className="time-form">
            <ItemDetailTime id={id} price={price}/>
          </div>
        )}
      </div>
    
    </>
  );
};

export default ItemDetailDate;
