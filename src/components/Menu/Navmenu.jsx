import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Dropdown.css";

import logo from "../../assets/logo2sm.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import NavIcons from "./NavIcons";


const Navmenu2 = () => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = () => setClick(!click);

  useEffect(() => {
    let handler = () => {
      setClick(false);
    
    };
    document.addEventListener("mousedown", handler)
  })


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
      <div  className={color ? "navbar navbar-bcg" : "navbar"}>
        

    

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              to={"/"}
              onClick={() => setClick(false)}
            >
              INICIO
            </NavLink>
          </li>

          <li className="nav-item" onClick={() => setOpen(!open)}>
            <NavLink  to={"/servicios"}>
              EXCURSIONES
            </NavLink>

            
          </li>
          <li className="nav-item" onClick={() => setOpen(!open)}>
            <NavLink  to={"/blog"}>
              BLOG
            </NavLink>

            
          </li>
          <div>
          <Link to={"/"}>
            <img  className={color ? "logo-sm" : "logo"} src={logo} alt="logo" />
          </Link>
        </div>

          <li className="nav-item">
            <NavLink
              
              to={"/nosotros"}
              onClick={() => setClick(false)}
            >
              NOSOTROS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={"/contacto"}
              onClick={() => setClick(false)}
            >
              CONTACTO
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={"/galeria"}
              onClick={() => setClick(false)}
            >
              GALERIA
            </NavLink>
          </li>
          <li>
            <NavIcons/>
          </li>
        </ul>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#002569" }} />
          ) : (
            <FaBars size={30} style={{ color: "#002569" }} />
          )}
        </div>
      </div>
    </>
  );
};

export default Navmenu2;