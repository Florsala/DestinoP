import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { GrFacebookOption } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Button } from "react-bootstrap";

const NavIcons = () => {

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
    <div >
      
        <ul className="navicons nav">
          <li className="nav-item">
            <Button
            className={ color ? "btn-nav font-sm" : "btn-nav"}
            
              size="lg"
              variant="success"
            >
              Español
            </Button>{" "}
          </li>
         
        {/*   <li className="nav-item" style={{ fontSize: "1.8rem" }}>
            <BiSearchAlt2 />
          </li> */}
          <li className={color ? "nav-item font-md" : "nav-item"}>
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
         
        </ul>
      
    </div>
  );
};

export default NavIcons;
