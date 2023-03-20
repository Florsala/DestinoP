import React, { useContext, useEffect, useState } from "react";
import { getGaleria } from "../helpers/getGaleria";
import "../styles/Galeria.css";
import "../styles/Medias.css";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import { logDOM } from "@testing-library/react";
import { AiOutlineClose } from 'react-icons/ai'
import { getSeo } from "../helpers/getSeo";
import DocumentMeta from "react-document-meta";
import cartContext from "../context/CartContext";

/* imagenes para prueba */
/* const galeria = [
  {
    img: 'https://images.unsplash.com/photo-1675622211805-10feccb9ab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
  },
  {
    img: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
  },
  {
    img: 'https://images.unsplash.com/photo-1675427523142-b7c3e6acdbdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
  {
    img: 'https://images.unsplash.com/photo-1569928531284-7af57845d946?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
  },
  {
    img: 'https://images.unsplash.com/photo-1573727424538-381d0c879a40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
  {
    img: 'https://images.unsplash.com/photo-1502113130129-259236d6fabd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },

]; */

const Galeria = () => {

  const [etiquetas, setEtiquetas] = useState([]);
  const { idioma, getIdiomaSeccion, environment } = useContext(cartContext);

  const [meta, setMeta] = React.useState('')
  useEffect(() => {
    if (idioma.id) {
      setEtiquetas(getIdiomaSeccion("Galeria"));
      getSeo(idioma.id, 'Galeria').then((response) => {
        setMeta({
          title: response.data.seoTitle,
          description: response.data.seoDescripcion,
          meta: {
            charset: 'utf-8',
            name: {
              keywords: response.data.seoKeywords
            }
          }
        })
      })
    }
  }, [idioma])

  const ArrowRight = {
    color: "#fff",
    fontSize: "3rem",
    marginRight: "1.5rem",
    cursor: "pointer",
    zIndex: '1'
  };
  const ArrowLeft = {
    color: "#fff",
    fontSize: "3rem",
    marginLeft: "1.5rem",
    cursor: "pointer",
    zIndex: '1'

  };

  const imgClose = {
    color: ' #fff',
    fontSize: '2rem',
    position: 'absolute',
    zIndex: '2',
    top: '0',
    right: '0',
    margin: '1rem',
    cursor: 'pointer',
  }

  const [model, setModel] = useState(false);
  const [picImage, setPicImage] = useState(0);
  const [currentImg, setCurrentImg] = useState(0);

  const getImg = (img) => {
    setPicImage(img);
    setCurrentImg(img)

    setModel(true);
  };

  const goToPrevious = () => {

    const newImage = galeria[0].img
    setPicImage(newImage)
    /*   const newImage = picImage === 0 ? galeria.length -1 : picImage - 1;
     setPicImage(newImage); */

  }

  const goToNext = () => {
    /*  const lastSlide = picImage === galeria.lenght - 1;
     const newImage = lastSlide ? 0 : picImage + 1;
     setPicImage(newImage) */
    setCurrentImg(currentImg + 1);

  }


  const [galeria, setGaleria] = useState([]);

  const getInfoGaleria = async () => {
    const newInfo = await getGaleria();
    setGaleria(newInfo);
  };

  useEffect(() => {
    getInfoGaleria();
  }, []);

  return (<>
    <DocumentMeta {...meta} />

    <div>
      <div className="hero_gal">
        <div className="heroContent_container_gal">
          <div className="heroContent_gal">
            <h1
              className="text-uppercase display-2"
              style={{ fontWeight: "600" }}
            >
              {etiquetas[0]?.palabra}
            </h1>
            <h4
              style={{
                textTransform: "uppercase",
                letterSpacing: "9px",
                fontSize: "2rem",
                fontWeight: 700,
              }}
            >
              {etiquetas[1]?.palabra}
            </h4>
          </div>
        </div>
      </div>

      <div className="galeria_title">
        <h2>{etiquetas[2]?.palabra}</h2>
      </div>

      <div
        className={model ? "model open" : "model"}

      >
        <SlArrowLeft style={ArrowLeft} onClick={goToPrevious} />

        <AiOutlineClose style={imgClose} onClick={() => setModel(false)} />
        <img src={picImage} alt="pic" />


        <SlArrowRight style={ArrowRight} onClick={goToNext} />
      </div>
      <div className="gallery">
        {/*       <img className="pics"  src={`${galeria[currentImg].img}`} alt="" onClick={() => getImg(currentImg)}/>
 */}
        {galeria.map((item, index) => (
          <div key={index} onClick={() => getImg(`${environment}${item.img}`)}>
            <img className="pics" src={`${environment}${item.img}`} alt="" />
          </div>
        ))}
      </div>
    </div>
  </>
  );
};
export default Galeria;
