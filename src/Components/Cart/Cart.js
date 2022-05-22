import React from "react";
import "./Cart.css";
import { GiShoppingCart } from "react-icons/gi";

const Cart = () => {
  return (
    <>
      <section className="other_nav">
        <GiShoppingCart  className="cart"/>
      </section>
    </>
  );
};

export default Cart;
