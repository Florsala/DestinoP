import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import { Link} from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";
import cartContext from "../context/CartContext";


const SliderDestSvs = ({ excDest, loading }) => {

  const { environment, idioma, getIdiomaSeccion } = useContext(cartContext);
  const [etiquetas, setEtiquetas] = useState([]);



  useEffect(() => {
    setEtiquetas(getIdiomaSeccion("Excursiones Detalle"));
  }, [idioma]);


  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
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
        <div
          xs={1}
          md={3}
          className="g-4 mx-5 grid_blog "
          style={{ marginTop: "2rem" }}
        >

{loading && <Spinner />}

          <Slider {...settings}>
            {excDest.map((items,index) => (
              
                <div key={index}>
                  <Card className="card-svs" style={{height: '23rem',width: "25rem"}}>
                    <Card.Img
                      variant="top"
                      style={{ padding: "1rem" }}
                      src={`${items.imagen}`}
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
                      <Link key={items.nombre} to={`/servicios/${items.id}`} >
                        <Button className="btn_svs" variant="primary" size="lg">
                        {etiquetas[8]?.palabra}
                        </Button>
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderDestSvs;
