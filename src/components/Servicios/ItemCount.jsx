import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";





const ItemCount = ({ Add, counter, setCounter }) => {


  return (
    <div className="buttonsBox">
      

      <div className="container-sm" style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "5px",
                  }}>

          <Link to={"/contacto"}>
        <Button variant="primary">Realizar consulta</Button>
      </Link>
      <Button
        style={{backgroundColor: '#002569'}}
        size="medium"
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
