import React from "react";
import "../styles/Blog.css";
import monta from "../assets/monta.png";



import ushuaia from '../assets/ush-am.jpg';


const Blog = () => {
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
            información{" "}
            <span className="headerTitle_b_blog">Fin del Mundo</span>{" "}
          </h2>
        </div>
      </div>


<div >
    <h1 className="text-uppercase mb-5 header_blog" >blog</h1>
</div>




    </div>
  );
};

export default Blog;
