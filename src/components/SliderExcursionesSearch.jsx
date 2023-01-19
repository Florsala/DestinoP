import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Spinner } from "react-bootstrap";

const SliderExcursiones = ( { excursiones, loading } ) => {


  
  

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

          <div className="container-ExcSearch">
            {excursiones.map((items) => (
              <Link key={items.id}  to={`/servicios/${items.id}`} >
                
                  <Card className="card-svs">
                    <Card.Img
                      variant="top"
                      style={{ padding: "1rem" }}
                      src={items.imagen}
                    />
                    <Card.Body className="card-body">
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          fontWeight: "600",
                          alignitems: "flex-start",
                        }}
                      >
                        <Card.Title
                          style={{ color: "black", fontSize: "1.3rem" }}
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
