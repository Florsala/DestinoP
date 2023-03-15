import React, { useContext, useEffect, useRef, useState } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo2sm.png";
import NavIcons from "./NavIcons";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "./CartWidget";
import cartContext from "../../context/CartContext";
//import getMenu from "../helpers/getIdiomas";


const Navmenu = () => {
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

  const closeMenu = () => setClick(false);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        style={{ padding: " 0 2rem" }}
        className={color ? "navbar navbar-bcg" : "navbar"}
      >
      {/*   <div
          style={{
            width: "100%",
            margin: "0.3125rem auto",
            zIndex: "-1",
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            left: "0",
          }}
        >
          <Link to={"/"}>
            <img
              src={logo}
              alt="logo"
              className={color ? "logo h-4" : "logo"}
            />
          </Link>
        </div> */}
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
          /*   width: "100%", */
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

      </Navbar>

      <Outlet />
    </>
  );
};

export default Navmenu;

{
  /* <div style={{marginTop:'1rem', backgroundColor:'#fff'}}>
      
      <nav className="navbar">
        <ul className="navmenu">
          <li className="navitem active">
          <Link
              
              to={"/"}
              
            >
              HOME
            </Link>
          </li>
          <li className="navitem">SERVICIOS</li>
          <li className="navitem">BLOG</li>
          <li className="navitem">
          <Link
              
              to={"/Nosotros"}
              
            >
              NOSOTROS
            </Link>
          </li>
          <li className="navitem">
            <Link  to={"/Contacto"}>

            CONTACTANOS
            
            </Link>
            </li>
          <li className="navitem">GALERIA</li>
        </ul>

        <Link to={"/"}><img src={logo} alt="logo" height={80} /> 
        </Link>

        segunda prueba mas abajo ----->

     

       <ul  className={click ? "nav-menu active" : "nav-menu"} >
          <li className="nav-item">
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to={"/"}
             
            >
              HOME
            </Link>
          </li>

          <li className="nav-item" >
            <Link style={{ color: "white", textDecoration: "none" }} to={"/"}>
              SERVICIOS
            </Link>

           
          </li>

          <li className="nav-item">
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to={"/Nosotros"}
              
            >
              BLOG
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to={"/contacto"}
              onClick={() => setClick(false)}
            >
              NOSOTROS
            </Link>
          </li>

          <li className="nav-item">
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to={"/contacto"}
               onClick={() => setClick(false)} 
            >
              CONTACTANOS
            </Link>
          </li>

          <li className="nav-item">
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to={"/contacto"}
              onClick={() => setClick(false)} 
            >
              GALERIA
            </Link>
          </li>
          <li>
            <IconsMenu />
          </li>
        </ul> 

        <NavIcons/> 
      </nav> 
    </div>
  );
};

export default Navmenu; */
}
