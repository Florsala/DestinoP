import React from "react";
import { useContext } from "react";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartWidget = () => {


 /*  const { total } = useContext(cartContext);
  const cartNumber = <span className="cartNumber">{total}</span>; */

  return (
    <div>
      <div className="Cart">
        <Link to={"/Cart"}>
          <BsCart />

{/* {total != 0 && (cartNumber)} */}

        </Link>
      </div>
    </div>
  );
};

export default CartWidget;
