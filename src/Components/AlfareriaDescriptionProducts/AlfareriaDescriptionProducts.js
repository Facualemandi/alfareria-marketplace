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
        className="container_total_description"
        onClick={() => totalItemDescription(el)}
      >
        <section className="container_description_img">
          <img alt={name} src={image} className="img_product" />
          <CgDetailsMore className="details" onClick={placeholder} />
          
          <NavLink to={`/description/${id}`}>
          <section className={`container_item ${buy && 'is-active'}`}>
              {buy && <p className={`buy_item`}> Hace tu pedido <BsArrowRightShort className="icon_rigth" /></p>}
          </section>
          </NavLink> 

          {/* <NavLink to={`/description/${id}`} className={`container_item ${buy && 'is-active'}`}>
          Hace tu pedído <BsArrowRightShort className="icon_rigth" />{" "}
        </NavLink> */}
        </section>

        <section className="name_product">
          <p>{name}</p>
        </section>

      </section>
    </>
  );
};

export default AlfareriaDescriptionProducts;
