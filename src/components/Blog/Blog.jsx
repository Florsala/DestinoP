import React, { useContext, useEffect, useState } from "react";
import "./Blog.css";
import monta from '././../../assets/monta.png';


import ushuaia from '././../../assets/ush-am.jpg';
import cartContext from "../../context/CartContext";


const Blog = () => {
  const [etiquetas, setEtiquetas] = useState([]);
  const { idioma, getIdiomaSeccion } = useContext(cartContext);
  useEffect(() => {
    setEtiquetas(getIdiomaSeccion("Blog"));
  }, [idioma]);
  return (
    <div>
      <div>
        <img
          className="headerImg"
          style={{ filter: "brightness(0.9)" }}
          src={ushuaia}
          alt=""
        />
        <img className="headerImg2" src={monta} alt="mount" />

        <div className="headerTitle_blog container-md">
          <h2 className="headerTitle_a_blog">
            {etiquetas[0]?.palabra}{" "}
            <span className="headerTitle_b_blog">{etiquetas[1]?.palabra}</span>{" "}
          </h2>
        </div>
      </div>


<div >
    <h1 className="text-uppercase mb-5 header_blog" >{etiquetas[0]?.palabra.toUpperCase()}</h1>
</div>




    </div>
  );
};

export default Blog;
