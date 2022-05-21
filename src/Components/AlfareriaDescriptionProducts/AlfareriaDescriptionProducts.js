import React from "react";
import { NavLink } from "react-router-dom";
import "./AlfareriaDescriptionProducts.css";

const AlfareriaDescriptionProducts = ({ name, image, id, totalItemDescription, el }) => {
  return (
    <>
      <section className="container_total_description" onClick={() => totalItemDescription(el)}>
        <section className='container_description_img'>
          <img alt={name} src={image}  className='img_product'/>
        </section>

        <section className="name_product">
              <p>{name}</p>
        </section>
           
           <NavLink to={`/description/${id}`}>Hola</NavLink>
      </section>
    </>
  );
};

export default AlfareriaDescriptionProducts;


