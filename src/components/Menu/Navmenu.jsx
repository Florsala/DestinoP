import React, { useContext, useEffect, useRef, useState } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo2sm.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import NavIcons from "./NavIcons";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "./CartWidget";
import cartContext from "../../context/CartContext";
//import getMenu from "../helpers/getIdiomas";


const Navmenu2 = () => {
  const [click, setClick] = useState(false);
  const [etiquetas, setEtiquetas] = useState([]);
  const { idioma, getIdiomaSeccion } = useContext(cartContext)

  const handleClick = () => setClick(!click);

  useEffect(() => {
    let handler = () => {
      setClick(false);
    
    };
    document.addEventListener("mousedown", handler)
  })
  useEffect(()=>{
    setEtiquetas(getIdiomaSeccion('Menu'))
 },[idioma])


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
{/*       <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        style={{ padding: " 0 2rem" }}
        className={color ? "navbar navbar-bcg" : "navbar"}
      >
     
        <div className="container-fluid ">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            style={{ justifyContent: "center" }}
          >
            <Nav className={color ? "navLink font-sm" : "navLink"}>
              <Nav.Link as={NavLink} to={"/"} onClick={closeMenu}>
              {etiquetas[0]?.palabra}
              </Nav.Link>
              <Nav.Link as={NavLink} to={"/servicios"} onClick={()=> setClick(false)}>
              {etiquetas[1]?.palabra}
              </Nav.Link>
              <Nav.Link as={NavLink} to={"/blog"}>
              {etiquetas[2]?.palabra}
              </Nav.Link>


<Nav.Link as={NavLink} to={"/"} style={{
            margin: "0.3125rem auto",
            display: "flex",
            justifyContent: "center",
            border:'none'
          }}>
          
        
            <img
              src={logo}
              alt="logo"
              className={color ? "logo h-4" : "logo"}
            />



</Nav.Link>

              <Nav.Link as={NavLink} to={"/nosotros"}>
              {etiquetas[3]?.palabra}
              </Nav.Link>

              <Nav.Link as={NavLink} to={"/contacto"}>
              {etiquetas[4]?.palabra}
              </Nav.Link>

              <Nav.Link as={NavLink} to={"/galeria"}>
              {etiquetas[5]?.palabra}
              </Nav.Link>
            </Nav>

            <NavIcons />

          </Navbar.Collapse>
        </div>

      </Navbar> */}

    

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              to={"/"}
              onClick={() => setClick(false)}
            >
               {etiquetas[0]?.palabra}
            </NavLink>
          </li>

          <li className="nav-item" onClick={() => setOpen(!open)}>
            <NavLink  to={"/servicios"}>
            {etiquetas[1]?.palabra}
            </NavLink>

            
          </li>
          <li className="nav-item" onClick={() => setOpen(!open)}>
            <NavLink  to={"/blog"}>
            {etiquetas[2]?.palabra}
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
              {etiquetas[3]?.palabra}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={"/contacto"}
              onClick={() => setClick(false)}
            >
                            {etiquetas[4]?.palabra}

            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={"/galeria"}
              onClick={() => setClick(false)}
            >
                            {etiquetas[5]?.palabra}

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
      
    </>
  );
};

export default Navmenu2;