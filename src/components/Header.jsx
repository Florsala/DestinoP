import React, { useEffect, useState } from "react";
import "../styles/Header.css";

import "../styles/Hero.css";



import dataTours from "../data/dataTours";

import wsp from "../assets/whatsapp.svg";
import SliderDestacadas from "./SliderDestacadas";

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
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
    <>
      <div className="hero">
        <div className="heroContent_container">
          <div className="heroContent container-md">
            <h1 className="headerTitle_a">
              Pasión por la <span className="headerTitle_b">naturaleza</span>{" "}
            </h1>

            <h4 className="headerTitle_c">Excursiones en Ushuaia</h4>

            <div className="headerTitle_btn">
              Más info
              <img
                style={{ height: "1.5625rem", borderRadius: "50%" }}
                src={wsp}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-lg-header">
        <h1 className="display-4" style={{ fontWeight: "600" }}>
          Bienvenidos a Destino Patagonia
        </h1>
        <h2
          className="display-5"
          style={{ fontWeight: "400", color: "#857676" }}
        >
          Nuestras Excursiones
        </h2>
      </div>

      <div>
  <SliderDestacadas items={items}/>
</div>

     
    </>
  );
};

export default Header;

/* const Header = () => {
  return (
    <div>
      <div>
        <img
          className="headerImg"
          src={
            "https://destinopatagonia.com//wp-content/uploads/2021/10/2021-0626-DJI_0746-lrexport-1.jpg"
          }
          alt=""
        />
        <img className="headerImg2" src={monta} alt="mount" />

        <div className="headerTitle container-md">
          <h2 className="headerTitle_a">
            Pasión por la <span className="headerTitle_b">naturaleza</span>{" "}
          </h2>

          <h4 className="headerTitle_c">Excursiones en Ushuaia</h4>

          <div className="headerTitle_btn">
            Más info
            <img
              style={{ height: "1.5625rem", borderRadius: "50%" }}
              src={wsp}
              alt=""
            />
          </div>
        </div>

       
      </div>

      <div
        className="container-lg"
      >
        <h1 className="display-4" style={{ fontWeight: "600" }}>
          Bienvenidos a Destino Patagonia
        </h1>
        <h2
          className="display-5"
          style={{ fontWeight: "400", color: "#857676" }}
        >
          Nuestras Excursiones
        </h2>
      </div>

      <div className="container">
        <div className="card img-fluid container_cards">
          <img className="card-bottom" src={lobos} alt="lobos" />
          <div className="card-img-overlay">
            <h5 className="card-title"> Isla de Lobos</h5>
            <p className="card-text">
              Durante tu visita al Fin del Mundo no te pierdas la oportunidad de
              navegarlas míticas aguas del Canal Beagle, en una experiencia que
              te llevará a imaginar aquellas historuas de los primeros
              navegantes que surcaban estos mares.
            </p>

            <a
              style={{
                color: "#fff",
                textTransform: "uppercase",
                fontWeight: "600",
              }}
              
              class="btn btn-basic"
            >
              más info
            </a>
          </div>
        </div>

        <div className="card img-fluid container_cards">
          <img className="card-bottom" src={harberton} alt="harberton" />
          <div className="card-img-overlay">
            <h5 className="card-title"> Estancia Harberton</h5>
            <p className="card-text">
              Durante tu visita al Fin del Mundo no te pierdas la oportunidad de
              navegarlas míticas aguas del Canal Beagle, en una experiencia que
              te llevará a imaginar aquellas historuas de los primeros
              navegantes que surcaban estos mares.
            </p>

            <a
              style={{
                color: "#fff",
                textTransform: "uppercase",
                fontWeight: "600",
              }}
             
              class="btn btn-basic"
            >
              más info
            </a>
          </div>
        </div>

        <div className="card img-fluid container_cards">
          <img className="card-bottom" src={pinguinos} alt="pinguinos" />
          <div className="card-img-overlay">
            <h5 className="card-title"> Pinguinera</h5>
            <p className="card-text">
              Durante tu visita al Fin del Mundo no te pierdas la oportunidad de
              navegarlas míticas aguas del Canal Beagle, en una experiencia que
              te llevará a imaginar aquellas historuas de los primeros
              navegantes que surcaban estos mares.
            </p>

            <a
              style={{
                color: "#fff",
                textTransform: "uppercase",
                fontWeight: "600",
              }}
              
              class="btn btn-basic"
            >
              más info
            </a>
          </div>
        </div>


      
      </div>

      
    </div>
  );
};

export default Header;
 */
