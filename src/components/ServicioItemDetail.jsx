import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import dataTours from '../data/dataTours';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Spinner } from "react-bootstrap";


const ServicioItemDetail = () => {

const [items, setItems] = useState({});

const [loading, setLoading] = useState(false)

const {id} = useParams();

const getItems = new Promise ((resolve) => {

    setTimeout(() => {
        const data = id ? dataTours.find((item) => item.id === id) : dataTours;

        resolve(data);
    }, 2000);
});
console.log(items);

useEffect(() => {
  getItems
  .then((res) => setItems(res))
    .finally(() => setLoading(false));
    
}, [id]);


  return ( loading ? (
    <>
          <Spinner
            style={{ margin: "50%", marginTop: "200px" }}
            /*  animation="border" */
            variant="primary"
            animation="grow"
          />
        </>
  ) : (

     <>
    
    <Container style={{marginTop:'7rem'}}>
        <Row>
            <Col className='itemContainer-img'>
            <img  src= {items.img} alt="" />
                    
            </Col>
            {/* <Row>
                <Col>
                <img width={'250px'} src={items.img} alt="" />
                </Col>
                <Col>
                <img width={'250px'} src={items.img} alt="" />
                </Col>
            </Row> */}
            <Col>
            <div className='itemContainer'>
                <h1>{items.title}</h1>
                <p>${items.price}ARS</p>
           </div>

           <Container>
            <div>
            <p>Temporada:</p>
            <p>Lugar y salida:</p>
            <p>Idioma:</p>

           </div>

           <div>
            <p>Duración:</p>
            <p>Dificultad:</p>
            <p>Observación:</p>
           </div>
           </Container>

        

           
            </Col>
        </Row>

        <Container className='text-justify'>
            <h2>Descripción</h2>
            <p style={{lineHeight:'1.75rem'}}>  {items.text}</p>
          
           </Container>
    </Container>

    </>
  )
   
  )
}

export default ServicioItemDetail