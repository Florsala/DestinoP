import React, { useState } from 'react'
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const ItemDetailGrid = ({ item, isPaquete }) => {


  const [selectedImg, setSelectedImg] = useState(!isPaquete ? item.imagenes[0]?.path : item.path)

  const [model, setModel] = useState(false);
  const [picImage, setPicImage] = useState("");
  const [click, setClick] = useState(false)

  const getImg = (img) => {
    setPicImage(img);
    setModel(true);
  };

  const handleClick = () => {

    setClick(!click)
  }

  return (
    <div className="container-md container-grid-img" >
      <img src={selectedImg} alt="selected"
        className={click ? 'container-grid-img_first open' : 'container-grid-img_first'}
        onClick={handleClick}
      />
      {/*  {videos.map((video, index) => (
              <video
              key={index}
                src={video.path}
                width="500"
                height="400"
                controls="controls"
                autoPlay={true}
              ></video>
            ))}  */}

      {isPaquete ? <div> {item.productos.map((p) =>
        <Link key={p.id} to={`/servicios/${p.id}`}>
          <Card className="card-svs" style={{ width: "23rem" }}>
            <Card.Img
              variant="top"
              style={{ padding: "1rem" }}
              src={p.imagen}

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
                  style={{ color: "black", fontSize: "1.1rem", textTransform: 'uppercase' }}
                >
                  {p.nombre}
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
      )}</div>
        : item.imagenes.map((img, index) => (
          <img key={index} src={img.path} alt=""
            onClick={() => setSelectedImg(img.path)}
          />
        ))}



    </div>

   
  )
};

export default ItemDetailGrid;
