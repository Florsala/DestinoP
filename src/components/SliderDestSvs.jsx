import React from "react";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";


const SliderDestSvs = ({ excDest, loading }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
  };


  return (
    <div>
      <div>
        <div
          xs={1}
          md={3}
          className="g-4  grid_blog container-md"
          style={{ margin: "4rem auto" }}
        >

{loading && <Spinner />}

          <Slider {...settings}>
            {excDest.map((items) => (
              <Link key={items.nombre} /* to={`/servicios/${items.id}`} */>
                <div>
                  <Card className="card-svs">
                    <Card.Img
                      variant="top"
                      style={{ padding: "1rem" }}
                      src={items.imagen}
                    />
                    <Card.Body className="card-body-column">
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          fontWeight: "600",
                          alignItems: "flex-start",
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

export default SliderDestSvs;
