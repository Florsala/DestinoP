import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { GrFacebookOption } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

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
    <div>
      <ul className="navicons nav">
        <li className="nav-item">
          <Form.Group
            style={{
              backgroundColor: " #002569",
              color: "#fff",
              borderRadius: "8px",
              
            }}
          >
            <Form.Select style={{cursor:'pointer'}} size="sm" aria-label="Default select example">
              <option value="1">Español</option>
              <option value="2">Inglés</option>
            </Form.Select>
          </Form.Group>
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
