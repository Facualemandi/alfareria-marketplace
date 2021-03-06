import React from "react";
import "./Productuantity.css";
import { RiWhatsappFill } from "react-icons/ri";

const Productuantity = ({ product, count }) => {
  let { name, price, image } = product;

  const totalPrice = (price * count)

  return (
    <>


      <h2 className="title_quantity"> Tu pedido es el siguiente:</h2>

      <section className="product_quantity_container">
        <img src={image} className="quantity_img" alt={name} />

        <section className="container_features">
          <p>{name}</p>
          <span>${price}</span>
        </section>

        <span className="amount"> x{count} </span>

      </section>
      
        <section className="section_whatsapp">
          <a
            href={`https://api.whatsapp.com/send?phone=543517653448&text=Hola!%20Quiero%20pedirte%20${name}%20x${count}%20por%20un%20total%20de%20$${totalPrice}`}
          >
            Pedi por WhatsApp <RiWhatsappFill className="icon_whatsapp" />
          </a>
        </section>
    </>
  );
};

export default Productuantity;
