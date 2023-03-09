import React, { useEffect, useState } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { getGaleria } from "../helpers/getGaleria";


const SliderHome = () => {



  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
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
      <Slider {...settings}>
      {galeria.map((items,index) => (
        <div key={index}>
          <img
            style={{ width: "100%", height: "80vh", objectFit: "cover" }}
            src={items.img}
            alt=""
          />
        </div>

       /*  <div>
          <img
            style={{ width: "100%", height: "80vh", objectFit: "cover" }}
            src={ballena}
            alt="ballena"
          />
        </div>
        <div>
          <img
            style={{ width: "100%", height: "80vh", objectFit: "cover" }}
            src={harberton}
            alt="ballena"
          />
        </div>
        <div>
          <img
            style={{ width: "100%", height: "80vh", objectFit: "cover" }}
            src={paisaje}
            alt="ballena"
          />
        </div> */
      ))}
      </Slider>
    </div>
  );
};

export default SliderHome;
