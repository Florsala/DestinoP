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
    <div>
      <nav className="navbar-rg">
        <ul className="navicons">
          <li>
            <Button
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
          {/* <li className='langbt'>Español</li> */}
          <li style={{ fontSize: "1.8rem" }}>
            <BiSearchAlt2 />
          </li>
          <li>
            <GrFacebookOption />
          </li>
          <li>
            <GrInstagram />
          </li>
          <li>
            <FaWhatsapp />
          </li>
          <li>
            <FaLinkedinIn />
          </li>
          <li style={{ fontSize: "1.5rem", marginLeft: "1rem" }}>
            <BsCart />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavIcons;
