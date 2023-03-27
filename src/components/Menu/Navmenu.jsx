import React, { useContext, useEffect, useRef, useState } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo2sm.png";
import { FaBars, FaTimes } from "react-icons/fa";
import NavIcons from "./NavIcons";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "./CartWidget";
import cartContext from "../../context/CartContext";
//import getMenu from "../helpers/getIdiomas";
import "./Dropdown.css";

const Navmenu2 = () => {
  const [click, setClick] = useState(false);
  const [etiquetas, setEtiquetas] = useState([]);
  const { idioma, getIdiomaSeccion } = useContext(cartContext);

  const [open, setOpen] = useState(false);

  const handleClick = () => setClick(!click);

  
  useEffect(() => {
    setEtiquetas(getIdiomaSeccion("Menu"));
  }, [idioma]);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 6.25) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <div className={color ? "navbar navbar-bcg" : "navbar"}>
        <ul className={click ? "nav-menu active" : "nav-menu"} onMouseLeave={()=>setClick(false)}>
  
          <li className="nav-item">
            <NavLink to={"/"} onClick={() => setClick(false)}>
              {etiquetas[0]?.palabra.toUpperCase()}
            </NavLink>
          </li>

          <li className="nav-item" onClick={() =>  setClick(false)  
            } >
            <NavLink  to={"/servicios"}>{etiquetas[1]?.palabra.toUpperCase()}</NavLink>
          </li>
          <li className="nav-item" onClick={() => setClick(false)}>
            <NavLink to={"/blog"}>{etiquetas[2]?.palabra.toUpperCase()}</NavLink>
          </li>
          <div>
            <Link to={"/"}>
              <img
                className={color ? "logo-sm" : "logo"}
                src={logo}
                alt="logo"
              />
            </Link>
          </div>

          <li className="nav-item">
            <NavLink to={"/nosotros"} onClick={() => setClick(false)}>
              {etiquetas[3]?.palabra.toUpperCase()}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/contacto"} onClick={() => setClick(false)}>
              {etiquetas[4]?.palabra.toUpperCase()}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/galeria"} onClick={() => setClick(false)}>
              {etiquetas[5]?.palabra.toUpperCase()
              }
            </NavLink>
          </li>
          <li>
            
            <NavIcons />
            
            
          </li>
          
        </ul>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#002569" }}/>
          ) : (
            <FaBars size={30} style={{ color: "#002569" }} />
          )}
        </div>
      </div>

     
    </>
  );
};

export default Navmenu2;
