import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { GrFacebookOption } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { Button } from "react-bootstrap";

const NavIcons = () => {
  return (
    <div >
      
        <ul className="navicons nav">
          <li className="nav-item">
            <Button
            className="btn-nav"
              style={{
                backgroundColor: "black",
                fontFamily: "inherit",
                fontSize: "0.9rem",
              }}
              size="lg"
              variant="success"
            >
              Español
            </Button>{" "}
          </li>
         
          <li className="nav-item" style={{ fontSize: "1.8rem" }}>
            <BiSearchAlt2 />
          </li>
          <li className="nav-item">
            <GrFacebookOption />
          </li>
          <li className="nav-item">
            <GrInstagram />
          </li>
          <li className="nav-item">
            <FaWhatsapp />
          </li>
          <li className="nav-item">
            <FaLinkedinIn />
          </li>
          <li className="nav-item" style={{ fontSize: "1.5rem", marginLeft: "1rem" }}>
            <BsCart />
          </li>
        </ul>
      
    </div>
  );
};

export default NavIcons;
