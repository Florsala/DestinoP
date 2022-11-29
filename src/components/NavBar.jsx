import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2sm.png";
import NavIcons from "./NavIcons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
   
<div style={{marginTop:'1rem', backgroundColor:'#fff'}}>
      
      <nav className="navbar">
        <ul className="navmenu">
          <li className="navitem active">
          <Link
              
              to={"/DestinoP"}
              
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

        <Link to={"/DestinoP"}><img src={logo} alt="logo" height={80} /> 
        </Link>

        

     

      {/* <ul  className={click ? "nav-menu active" : "nav-menu"} >
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
        </ul> */}

       <NavIcons/> 
      </nav> 
    </div>
  );
};

export default NavBar;






/* Prueba con bootstrap */

/*  <div >
     

<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
<Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav
      className="me-auto"
      style={{
        alignItems: "center",

        textTransform: "uppercase",
        fontSize: "0.9rem",
        color: "black",
        fontFamily: "Open Sans",
        fontWeight: "600",
      }}
    >
      <Nav.Link>
        <Link to={"/"}>Home</Link>
      </Nav.Link>
      <Nav.Link to={"/Servicios"}>Servicios</Nav.Link>
      <Nav.Link>Blog</Nav.Link>
      <Nav.Link>
        <Link to={"/Nosotros"}>Nosotros</Link>
      </Nav.Link>

      <Link to={"/Contacto"}>Contacto</Link>

      <Nav.Link>Galería</Nav.Link>

 
    </Nav>

    <Nav>
    
<Link to={"/"}>
  <img src={logo} alt="logo" height={80} />
</Link>

    </Nav>

    

    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>


</Container>


</Navbar> */