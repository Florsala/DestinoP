import React, { useContext } from "react";
import Slider from "react-slick";

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import cartContext from "../context/CartContext";

const SliderExcursiones = ( { excursiones, loading } ) => {

  const { environment } = useContext(cartContext);
  
   const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  }; 

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

          <Slider {...settings}>
            {excursiones.map((items) => (
              <Link key={items.id}  to={`/servicios/${items.id}`} >
                <div>
                  <Card className="card-svs" style={{height: '22rem'}}>
                    <Card.Img
                      variant="top"
                      style={{ padding: "1rem" }}
                      src={`${items.imagen}`}
                    />
                    <Card.Body style={{display:'grid'}}>
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
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderExcursiones;
