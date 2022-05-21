import React from "react";
import "../DescriptionProduct/DescriptionProduct.css";
import { RiWhatsappFill } from "react-icons/ri";
import { IoIosReturnLeft } from "react-icons/io";

const DescriptionProduct = ({ product, navHome }) => {
  let { name, price, image, description } = product;

  console.log(product);
  return (
    <>
      <section className="container_description_product">
        <section className="">
          <img alt={name} src={image} className="img_description_product" />
        </section>

        <section>
          <h2 className="h2_description_product">{name}</h2>
        </section>

        <section>
          <p className="price_description_product">{price}</p>
        </section>

        <section>
          <p className="p_description_product">{description}</p>
        </section>

        <section className="section_whatsapp">
          <a
            href={`https://api.whatsapp.com/send?phone=543517653448&text=Hola!%20Quiero%20pedirte%20${name}%20por%20el%20precio%20de%20${price}!`}
          >
            Pedi por WhatsApp <RiWhatsappFill className="icon_whatsapp" />
          </a>
        </section>


       
        <button className="btn_retur"  onClick={navHome}>Regresar <IoIosReturnLeft className="icon_return"/></button>

      </section>
    </>
  );
};

export default DescriptionProduct;
