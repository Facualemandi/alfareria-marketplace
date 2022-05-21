import React from "react";
import "./AlfareriaDescriptionProducts.css";
import { BiChevronRight } from 'react-icons/bi';

const AlfareriaDescriptionProducts = ({ name, image, description, price ,}) => {
  return (
    <>
      <section className="container_total_description">
        <section className='container_description_img'>
          <img alt={name} src={image}  className='img_product'/>
        </section>

        <section className="name_product">
              <p>{name}</p>
        </section>
           
           <p className="more_info">  Mas información <BiChevronRight/> </p>
      </section>
    </>
  );
};

export default AlfareriaDescriptionProducts;
