import React, { useEffect, useState } from "react";
import { GrFacebookOption } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import { useFetchIdiomas } from "../../hooks/useFetchIdiomas";
import { getContacto } from "../../helpers/getContacto";
import CartWidget from "./CartWidget";
import { useContext } from "react";
import cartContext from "../../context/CartContext";
import { getIdiomas } from "../../helpers/getIdiomas";

const NavIcons = () => {

  const [contacto, setContacto] = useState([]);
  const [idiomas, setIdiomas] = useState([]);
 

  const { setIdiomaObject } = useContext(cartContext)

  const getInfoContacto = async () => {
    const newInfo = await getContacto();
    setContacto(newInfo);
  }

  useEffect(() => {
    getInfoContacto()
    getIdiomas().then((i)=>{
      setIdiomas(i)
      setIdiomaObject(i[0])
    })
  }, [])
 


  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 6.25) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  const handlerIdioma = (idiomaId) => {
    const newIdioma = idiomas.filter((i)=> i.id === +idiomaId)[0]
    setIdiomaObject(newIdioma)
  }
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
              style={{ cursor: "pointer", fontSize:'.75rem'}}
              size="sm"
              aria-label="Default select example"
              onChange={(e)=> {handlerIdioma(e.target.value)}}
            >
              {idiomas.map((lang) => (
                <option value={lang.id} key={lang.id} >
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
        <li className="nav-item">
          <a href={contacto.instagram} target="_blank">
            <GrInstagram />
          </a>
        </li>
        <li className="nav-item" style={{ fontSize: '1.35rem' }}>
          <a href={`https://wa.me/${contacto.whatsapp?.replace(/[^\w]/gi, '')} `}
            target={"blank"}>
            <FaWhatsapp />
          </a>
        </li>
        {/*   <li className="nav-item">
          <a href={contacto.linkedin} target="_blank">
            <FaLinkedinIn />
          </a>
        </li> */}

        <CartWidget />
      </ul>


    </div>
  );
};

export default NavIcons;
