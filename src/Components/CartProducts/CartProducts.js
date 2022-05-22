import React from 'react'
import './CartProduct.css'

const CartProducts = ({cart}) => {
  return (
     <>
       <section className={`container_cart_products ${cart && 'is-active'}`}>
          
       </section>
     </>
  )
}

export default CartProducts