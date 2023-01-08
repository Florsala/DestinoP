import React, { useEffect, useState } from "react";
import { GrFacebookOption } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import { useFetchIdiomas } from "../hooks/useFetchIdiomas";
import { getContacto } from "../helpers/getContacto";

const NavIcons = () => {
  const { idiomas } = useFetchIdiomas();

  const [contacto, setContacto] = useState([]);

  const getInfoContacto = async () => {
    const newInfo = await getContacto();
    setContacto(newInfo);
  }
  
  useEffect(()=>{
    getInfoContacto()
  },[])

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
            <Form.Select
              style={{ cursor: "pointer" }}
              size="sm"
              aria-label="Default select example"
            >
              {idiomas.map((lang) => (
                <option value={lang.id} key={lang.id}>
                  {lang.nombre}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </li>

        <li className={color ? "nav-item font-md" : "nav-item"}>
          <a href={contacto.facebook} target="_blank">
            <GrFacebookOption />
          </a>
        </li>
        <li  className="nav-item">
          <a href={contacto.instagram} target="_blank">
            <GrInstagram />
          </a>
        </li>
        <li className="nav-item">
          <a href={contacto.whatsapp} target="_blank">
            <FaWhatsapp />
          </a>
        </li>
        <li className="nav-item">
          <a href={contacto.linkedin} target="_blank">
            <FaLinkedinIn />
          </a>
        </li>

        {/* <li className={color ? "nav-item font-md" : "nav-item"}>
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
        </li> */}
      </ul>
    </div>
  );
};

export default NavIcons;
