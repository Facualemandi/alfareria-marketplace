import React, { useState } from "react";
import "./Cart.css";
import { GiShoppingCart } from "react-icons/gi";
import CartProducts from "../CartProducts/CartProducts";

const Cart = ({ count }) => {
  const [cart, setCart] = useState(false);

  const asdasdas = () => {
       if(!cart){
           setCart(true)
       }else{
           setCart(false)
       }
  };

  return (
    <>
      <section className="other_nav">
        <section onClick={asdasdas} className='section_cart_products'>
          <span>{count}</span>
          <GiShoppingCart className="cart" />
        </section>
      </section>

        {cart && <CartProducts cart={cart}/>}
    </>
  );
};

export default Cart;
