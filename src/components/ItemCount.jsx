import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";





const ItemCount = ({ Add, stock, counter, setCounter }) => {
  
/*   const onAdd = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    }
  };

  const substract = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  }; */

  return (
    <div className="buttonsBox">
      <div className="container-sm" style={{ display: "flex", justifyContent: 'center',
    alignItems: 'baseline' }}>
       {/*  <Button
          variant="contained"
          size="x-small"
          className="button"
          onClick={substract}
        >
          <AiOutlineMinusCircle style={{fontSize: '1.4rem'}} />
        </Button>

        <p m={1}>Adultos {counter}</p>
        <Button
          variant="contained"
          size="small"
          className="button"
          onClick={onAdd}
        >
          <AiOutlinePlusCircle  style={{fontSize: '1.4rem'}}/>
        </Button> */}
      </div>

      <div className="container-sm" style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "5px",
                  }}>

          <Link to={"/contacto"}>
        <Button variant="primary">Realizar consulta</Button>
      </Link>
      <Button
        className="btnAgregar"
        variant="danger"
        size="medium"
        pb={3}
        onClick={() => {
          Add();
          if (counter === 1) {
            console.log(`${counter} item agregado al carrito`);
          } else {
            console.log(`${counter} items agregados al carrito`);
          }
        }}
      >
        Agregar al carrito
      </Button>
      </div>

    
    </div>
  );
};

export default ItemCount;
