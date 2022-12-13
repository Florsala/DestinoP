import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { MdDeleteOutline } from 'react-icons/md';
import '../styles/Cart.css';


const Cart = () => {
  return (
    <div>
      <Container className="CartItems">
        <Card style={{ width: "28rem" }}>
         
          <Card.Body style={{flexDirection:'column'}}>
            <Card.Title>Excursión</Card.Title>
            <Card.Text>
              Precio
            </Card.Text>
            <Card.Text>Cantidad: {/* {item.quantity} */}</Card.Text>
            <Card.Text>
              Precio total: ${/* {item.item.price * item.quantity} */}
            </Card.Text>
            <Button className="btn-supr" variant="danger" > <MdDeleteOutline style={{fontSize:'1.4rem'}}/> Eliminar</Button>
          </Card.Body>
        </Card>

        <Card /* key={item.item.id} */ className="CartContent">
          <Card.Body>
            <Card.Text variant="h5">{/* {item.item.title} */} title </Card.Text>
            <Card.Text variant="h6"> AR${/* {item.item.price} */}</Card.Text>
            <Card.Text>Cantidad: {/* {item.quantity} */}</Card.Text>
            <Card.Text>
              Precio total: ${/* {item.item.price * item.quantity} */}
            </Card.Text>
          </Card.Body>

          <Button
            variant="outlined" /* startIcon={<DeleteIcon />} */
            /*  onClick={() => { removeItem(item); } } */
          >
            Eliminar
          </Button>
        </Card>
      </Container>
    </div>
  );
};

export default Cart;
