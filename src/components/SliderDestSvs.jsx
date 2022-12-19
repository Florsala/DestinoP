import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import dataTours from "../data/dataTours";
import { Button } from "react-bootstrap";

const SliderDestSvs = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
  };

  const [items, setItems] = useState([]);

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

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
      <div>
        <div
          xs={1}
          md={3}
          className="g-4  grid_blog container-md"
          style={{ margin: "4rem auto" }}
        >

          
          <Slider {...settings}>
            {items.map((items) => (
              <Link key={items.id} to={`/servicios/${items.id}`}>
                <div>
                  <Card className="card-svs">
                    <Card.Img
                      variant="top"
                      style={{ padding: "1rem" }}
                      src={items.img}
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
                          {items.title}
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
