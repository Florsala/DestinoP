import React from "react";
import Card from "react-bootstrap/Card";
import Slider from "react-slick";

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ServicioItem = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div>
      {" "}
      <div
        xs={1}
        md={3}
        className="g-4 mx-5 grid_blog "
        style={{ marginTop: "2rem" }}
      >
        <Slider {...settings}>
          {items.map((items) => (
            <Link to={`/servicios/${items.id}`} key={items.id}>
              <div>
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
                      <Card.Title
                        style={{ color: "black", fontSize: "1.3rem" }}
                      >
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
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ServicioItem;
