import React from "react";
import "./Cart.css";
import { GiShoppingCart } from "react-icons/gi";

const Cart = ({count}) => {
  return (
    <>
      <section className="other_nav">
        <span>{count}</span>
        <GiShoppingCart className="cart" />
      </section>
    </>
  );
};

export default Cart;
