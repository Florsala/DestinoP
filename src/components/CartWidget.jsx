import React from "react";
import { useContext } from "react";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import cartContext from "../context/CartContext";


const CartWidget = () => {


  const { total } = useContext(cartContext);
  const cartNumber = <span className="cartNumber">{total}</span>; 

  return (
    <div>
      <div className="Cart">
        <Link to={"/cart"}>
          <BsCart />

 {total != 0 && (cartNumber)} 

        </Link>
      </div>
    </div>
  );
};

export default CartWidget;
