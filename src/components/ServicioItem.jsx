import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Slider from "react-slick";

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {  Spinner } from "react-bootstrap";


const ServicioItem = () => {

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

  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);


useEffect(() => {
  fetch("http://turismo.elemsoft.net/webapi//api/Excursiones/GetListByIdioma?id=1")
  .then(res => res.json())
  .then(
    (result) => {
      setLoading(true);
      setItems(result);

  },
  (error) => {
    setLoading(true);
    setError(error);

  }
  )
}, [])

if(error){
  return <div>ha surgido un error</div>
} else if (!loading){
   return <div> <Spinner
      style={{ margin: "50%", marginTop: "200px" }}
      variant="primary"
      animation="grow"
    />
  </div>

} else {
  return (
/*     console.log(items.msg)
 */     <div>
      <div
        xs={1}
        md={3}
        className="g-4 mx-5 grid_blog "
        style={{ marginTop: "2rem" }}
      >
        <Slider {...settings}>
          {items.msg.map((items) => (
            <Link  to={`/servicios/${items.nombre}`}  key={items.nombre}>
              <div>
                <Card className="card-svs">
                  <Card.Img
                    variant="top"
                    style={{ padding: "1rem" }}
                    src={items.path}
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
                        {items.nombre}
                      </Card.Title>

                      <p>{items.categoria}</p>
                    </div>

                    <div>
                      <p
                        style={{
                          fontWeight: "700",
                          fontSize: "1.3rem",
                          color: "#403f3f",
                        }}
                      >
                        ${items.precio}
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

}



  
};

export default ServicioItem;
