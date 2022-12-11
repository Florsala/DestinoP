import React, { useEffect, useState } from "react";
import '../styles/Servicios.css';
import dataTours from "../data/dataTours";

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from "bootstrap";

const Servicios = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        const data = dataTours;

        resolve(data);
      }, 1500);
    });
    getItems
      .then((res) => {
        setItems(res);
      })
      .finally(() => console.log(items));
  }, [dataTours]);
  console.log(items);

  return (
    <div>
      <div className="hero_svs">
        <div className="heroContent_container_svs">
          <div className="headerTitle_svs container-md">
            <h2 className="headerTitle_a_svs">
              Excursiones en el
              <span className="headerTitle_b_svs"> Fin del Mundo</span>{" "}
            </h2>
          </div>
        </div>
      </div>

      <Row xs={1} md={3} className="g-4 mx-5 grid_blog " style={{marginTop:'17rem'}}>
    {items.map((items) => (
      <Col>
        <Card >
          <Card.Img variant="top" src={items.img} />
          <Card.Body >
            <Card.Title style={{color:'black'}}>{items.title}</Card.Title>
            <p>{items.category}</p>
            <p>${items.price}</p>
          {/*   <Card.Text >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            At tellus at urna condimentum. Urna duis convallis convallis tellus id interdum velit. 
            Ut faucibus pulvinar elementum integer enim neque volutpat. Aliquet enim tortor at auctor urna nunc id cursus.
             Ut tellus elementum sagittis vitae et leo duis. 
            </Card.Text> */}
          </Card.Body>
          
        </Card>
      </Col>
    ))}
  </Row>


    </div>
  );
};

export default Servicios;
