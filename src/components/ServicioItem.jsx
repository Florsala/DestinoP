import React from 'react';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';


const ServicioItem = ({items}) => {
  return (
    <div> <Row
    xs={1}
    md={3}
    className="g-4 mx-5 grid_blog "
    style={{ marginTop: "2rem" }}
  >
    {items.map((items) => (

        <Link to={`/servicios/${items.id}`}>
        <Col>
        <Card className="card-svs">
          <Card.Img
            variant="top"
            style={{ padding: "1rem" }}
            src={items.img}
          />
          <Card.Body className="card-body">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                fontWeight: "600",
                alignItems: "flex-start",
              }}
            >
              <Card.Title style={{ color: "black", fontSize: "1.3rem" }}>
                {items.title}
              </Card.Title>

              <p>{items.category}</p>
            </div>

            <div>
              <p
                style={{
                  fontWeight: "700",
                  fontSize: "1.3rem",
                  color: "#403f3f",
                }}
              >
                ${items.price}
              </p>
              <Button className="btn_svs" variant="primary" size="lg">
                + info
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
        
        </Link>
      
    ))}
  </Row>
</div>
  )
}

export default ServicioItem