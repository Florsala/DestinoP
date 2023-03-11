import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Spinner } from "react-bootstrap";

const SliderExcursiones = ({ excursiones, loading, isPaquete}) => {
  

  return (
    <div>
      <div>
        <div
          xs={1}
          md={3}
          className="g-4 mx-5 grid_blog "
          style={{ marginTop: "2rem" }}
        >
          {loading && <Spinner />}

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }} 
          >
            {excursiones.map((items) => (
              <Link key={items.id} to={isPaquete? `/paquetes/${items.id}`: `/servicios/${items.id}`}>
                <Card className="card-svs" style={{ width: "23rem" }}>
                  <Card.Img
                    variant="top"
                    style={{ padding: "1rem" }}
                    src={items.imagen}        
                    
                  />
                  <Card.Body className="card-body">
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: "space-between",
                        fontWeight: "600",
                        alignitems: "flex-start",
                      }}
                    >
                      <Card.Title
                        style={{ color: "black", fontSize: "1.1rem",textTransform: 'uppercase' }}
                      >
                        {items.nombre}
                      </Card.Title>
                    </div>

                    <div>
                      <Button className="btn_svs" variant="primary" size="lg">
                        + info
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderExcursiones;
