import React from 'react';
import { GrFacebookOption } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const IconsContainer = ({contacto}) => {
  return (
    <>
<ul className="IconsContainer">
                  <li >
                    <a href={contacto.facebook} target='_blank'>
                    <GrFacebookOption />
                    </a>
                  </li>
                  <li>
                    <a href={contacto.instagram} target='_blank'>
                    <GrInstagram />
                    </a>
                  </li>
                  <li>
                    <a href={`https://wa.me/${contacto.whatsapp?.replace(/[^\w]/gi, '')} `}
        target={"blank"}>
                    <FaWhatsapp />
                    </a>
                  </li>
                  {/* <li>
                    <a href={contacto.linkedin} target='_blank'>
                    <FaLinkedinIn />
                    </a>
                  </li> */}
                </ul>

    </>
  )
}

export default IconsContainer