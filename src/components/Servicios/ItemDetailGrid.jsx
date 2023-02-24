import React, { useState } from "react";

import pinguinos from "../../assets/pinguinos.jpg";
import harberton from "../../assets/harberton.jpg";
import { AiOutlineClose } from "react-icons/ai";
//import videoP from "../assets/video-p.mp4";

const imagenes = [
  {
    path: pinguinos,
  },
  {
    path: harberton,
  },
  {
    path: pinguinos,
  },
  {
    path: pinguinos,
  },
  {
    path: pinguinos,
  },
  {
    path: pinguinos,
  },
  {
    path: pinguinos,
  },
  {
    path: harberton,
  },
];

/* const videos = [
   {path: videoP}
 ] */

const ItemDetailGrid = ({ item }) => {
  const imgClose = {
    color: " #fff",
    fontSize: "2rem",
    position: "absolute",
    zIndex: "2",
    top: "0",
    right: "0",
    margin: "1rem",
    cursor: "pointer",
  };

  const [selectedImg, setSelectedImg] = useState(item.imagenes[0]?.path);

  const [model, setModel] = useState(false);
  const [picImage, setPicImage] = useState(imagenes[0]?.path);
  const [click, setClick] = useState(false);

  const getImg = (img) => {
    setPicImage(img);
    setModel(true);
  };

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="container-md container-grid-img">
      <div
        className={
          model ? "container-grid-img_first open" : "container-grid-img_first"
        }
        onClick={() => setModel(false)}
      >
        <img src={picImage} alt="selected" />
        {/*       <AiOutlineClose style={imgClose} onClick={() => setModel(false)} />
         */}{" "}
      </div>

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
      {/* aca va item.imagenes */}
      {imagenes.map((img, index) => (
        <div onClick={() => getImg(img.path)}>
          <img key={index} src={img.path} alt="" />
        </div>
      ))}
    </div>
  );
};

export default ItemDetailGrid;
