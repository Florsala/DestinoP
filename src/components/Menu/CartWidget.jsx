import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { GrFacebookOption } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import cartContext from "../../context/CartContext";
import { getContacto } from "../../helpers/getContacto";

const CartWidget = () => {
  
  const [contacto, setContacto] = useState([]);

  const { total } = useContext(cartContext);
  const cartNumber = <span className="cartNumber">{total}</span>; 

  const getInfoContacto = async () => {
    const newInfo = await getContacto();
    setContacto(newInfo);
  }

  useEffect(() => {
    getInfoContacto()
  }, [])

  return (
    <div>
      <div className="Cart mt-3">
      <a href={contacto.facebook} style={{paddingRight:'0.7rem'}} target="_blank">
            <GrFacebookOption />
          </a>
      <a href={contacto.instagram} style={{paddingRight:'0.7rem'}} target="_blank">
            <GrInstagram />
          </a>
      <a href={`https://wa.me/${contacto.whatsapp?.replace(/[^\w]/gi, '')} `} style={{paddingRight:'0.7rem'}}
            target={"blank"}>
            <FaWhatsapp />
          </a>
        <Link to={"/cart"}>
          <BsCart />

 {total != 0 && (cartNumber)} 

        </Link>
      </div>
    </div>
  );
};

export default CartWidget;
