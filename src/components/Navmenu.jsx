import React from "react";
import {Outlet,NavLink, Link } from "react-router-dom";
import logo from "../assets/logo2sm.png";
import NavIcons from "./NavIcons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navmenu = () => {
  return (
<>
<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
<Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav
      style={{
        alignItems: "center",
        marginRight:'1rem',
        textTransform: "uppercase",
        fontSize: "0.9rem",
        color: "black",
        fontFamily: "Open Sans",
        fontWeight: "600",
      }}
    >
      <Nav.Link as={NavLink} to={"/DestinoP"}>
        Home
      </Nav.Link>
      <Nav.Link as={NavLink} to={"/servicios"}>Servicios</Nav.Link>
      <Nav.Link>Blog</Nav.Link>
      <Nav.Link as={NavLink} to={"/nosotros"}>
       Nosotros
      </Nav.Link>

      <Nav.Link as={NavLink} to={"/contacto"}>Contacto</Nav.Link>

      

      <Nav.Link as={NavLink} to={"/galeria"}>Galería</Nav.Link>

 
    </Nav>

    <Nav>
    
<Link to={"/DestinoP"}>
  <img src={logo} alt="logo" height={80} style={{margin:'1rem'}} />
</Link>

    </Nav>

    

    <Nav>
      <NavIcons/>
    </Nav>
  </Navbar.Collapse>


</Container>




</Navbar> 

<Outlet />


</>
  );
};

export default Navmenu;

   
{/* <div style={{marginTop:'1rem', backgroundColor:'#fff'}}>
      
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

export default Navmenu; */}






     




