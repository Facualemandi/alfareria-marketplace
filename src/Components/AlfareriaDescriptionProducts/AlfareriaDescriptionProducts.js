import React from "react";
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
  return (
    <>
      <section
        className="container_total_description"
        onClick={() => totalItemDescription(el)}
      >
        <section className="container_description_img">
          <img alt={name} src={image} className="img_product" />
          <CgDetailsMore className="details"/>
        </section>

        <section className="name_product">
          <p>{name}</p>
        </section>

        <NavLink to={`/description/${id}`} className="more_info">
          Hace tu pedído <BsArrowRightShort className="icon_rigth" />{" "}
        </NavLink>
      </section>
    </>
  );
};

export default AlfareriaDescriptionProducts;
