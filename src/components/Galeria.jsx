import React, { useEffect, useState } from "react";
import { getGaleria } from "../helpers/getGaleria";
import "../styles/Galeria.css";
import "../styles/Medias.css";



const Galeria = () => {
  
  const [model, setModel] = useState(false);
  const [picImage, setPicImage] = useState("");

  const getImg = (img) => {
    setPicImage(img);
    setModel(true);
  };

  const [galeria, setGaleria] = useState([]);

  const getInfoGaleria = async () => {
    const newInfo = await getGaleria();
    setGaleria(newInfo);
  };

  useEffect(() => {
    getInfoGaleria();
  }, []);

  return (
    <div>
      <div className="hero_gal">
        <div className="heroContent_container_gal">
          <div className="heroContent_gal">
            <h1
              className="text-uppercase display-2"
              style={{ fontWeight: "600" }}
            >
              Ushuaia
            </h1>
            <h4
              style={{
                textTransform: "uppercase",
                letterSpacing: "9px",
                fontSize: "2rem",
                fontWeight: 700,
              }}
            >
              en fotos
            </h4>
          </div>
        </div>
      </div>

      <div className="galeria_title">
        <h2>Galería</h2>
      </div>

      <div className={model ? "model open" : "model"}
      onClick={()=> setModel(false)}
      >
        <img src={picImage} alt="" />
      </div>
      <div className="gallery">
        {galeria.map((item, index) => (
          <div 
          
          key={index} 
          onClick={() => getImg(item.img)}>
            <img className="pics"  src={item.img} alt="" />
          </div>
        ))}
      </div>

     
    </div>
  );
};
export default Galeria;
