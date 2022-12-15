import React from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ballena from "../assets/ballena.jpg";
import paisaje from "../assets/paisaje.jpg";
import harberton from "../assets/harberton.jpg";


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

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img
            style={{ width: "100%", height: "80vh", objectFit: "cover" }}
            src={ballena}
            alt="ballena"
          />
        </div>

        <div>
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
        </div>
      </Slider>
    </div>
  );
};

export default SliderHome;
