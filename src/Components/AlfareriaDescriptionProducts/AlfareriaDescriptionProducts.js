import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./AlfareriaDescriptionProducts.css";
import { BsArrowRightShort } from "react-icons/bs";
import { CgDetailsMore } from "react-icons/cg";

const AlfareriaDescriptionProducts = ({
  name,
  image,
  id,
  totalItemDescription,
  el,
  price
}) => {
  const [buy, setBuy] = useState(false);

  const placeholder = () => {
    if (!buy) {
      setBuy(true);
    } else {
      setBuy(false);
    }
  };

  return (
    <>
      <section
        className={`container_total_description ${buy && 'is-active'}`}
        onClick={() => totalItemDescription(el)}
      >
        <section className="container_description_img">
          <img alt={name} src={image} className="img_product" />
          <CgDetailsMore className="details" onClick={placeholder} />
          
        </section>

        <section className="name_product">
          <p>{name}</p>
          <span className="price_description">{price}</span>
        </section>

  

          <NavLink to={`/description/${id}`}>
          <section className={`container_item`}>
              {buy && <button className={`buy_item`}> Hace tu pedido <BsArrowRightShort className="icon_rigth" /></button>}
          </section>
          </NavLink> 
      </section>
    </>
  );
};

export default AlfareriaDescriptionProducts;
