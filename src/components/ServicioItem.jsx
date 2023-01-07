import Card from "react-bootstrap/Card";
import Slider from "react-slick";

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { useFetchDestacadas } from "../hooks/useFetchDestacadas";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
};

const ServicioItem = () => {
  const { excDest, loading } = useFetchDestacadas();

  return (
    <div>
      <div
        xs={1}
        md={3}
        className="g-4 mx-5 grid_blog "
        style={{ marginTop: "2rem" }}
      >
        {loading && <Spinner />}

        <Slider {...settings}>
          {excDest.map((items) => (
            <Link to={`/servicios/${items.id}`} key={items.id}>
              <div>
                <Card className="card-svs">
                  <Card.Img
                    variant="top"
                    style={{ padding: "1rem" }}
                    src={items.imagen}
                  />
                  <Card.Body className="card-body card-item">
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
};

export default ServicioItem;
