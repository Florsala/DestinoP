import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";





const ItemCount = ({ Add, counter, setCounter, date,time }) => {
  const [disabled, setDisabled] = useState(true)
  let navigate = useNavigate(); 
  const routeChange = (newPath) =>
    navigate(newPath);
  useEffect(()=>{
     setDisabled(!date || !time || !counter.length)
  },[date,time,counter])
  return (
    <div className="buttonsBox">
      

      <div className="container-sm" style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "5px",
                  }}>

          
        <Button variant="primary" disabled={disabled } onClick={()=> routeChange("/contacto")}>Realizar consulta</Button>
      
      <Button
        style={{backgroundColor: '#002569'}}
        size="medium"
        disabled={disabled }
        pb={3}
        onClick={() => {
          Add();
        }}
      >
        Agregar al carrito
      </Button>
      </div>

    
    </div>
  );
};

export default ItemCount;
