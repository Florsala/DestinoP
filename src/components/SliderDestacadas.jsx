import React from "react";
import Slider from "react-slick";

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Spinner } from "react-bootstrap";

const SliderDestacadas = ({ excDest, loading }) => {
  
  const settings = {
/*     dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true, */
    dots: true,
    infinite: true,
    //speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    //initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,



    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <div>
        {" "}
        <div
          xs={1}
          md={3}
          className="g-4 mx-5 grid_blog "
          style={{ marginTop: "2rem" }}
        >
          {loading && <Spinner />}

          <Slider {...settings}>
            {excDest.map((items) => (
              <Link key={items.nombre}  to={`/servicios/${items.id}`} >
                <div>
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
                          style={{ color: "black", fontSize: "1.1rem" }}
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

export default SliderDestacadas;