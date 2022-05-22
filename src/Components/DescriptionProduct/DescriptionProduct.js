import React, { useState } from "react";
import "../DescriptionProduct/DescriptionProduct.css";
import { IoIosReturnLeft } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { GrFormAdd } from "react-icons/gr";
import { BiMinus } from "react-icons/bi";
import Productuantity from "../Productuantity/Productuantity";

const DescriptionProduct = ({ product, navHome }) => {
  let { name, price, image, description } = product;

  const [count, setCount] = useState(0);

  const addCart = () => {
    setCount(count + 1);
  };
  const removeCart = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(count);
    }
  };

  if (count > 0) {
  }

  console.log(product);
  return (
    <>
      <section className="container_description_product">
        <section className="">
          <img alt={name} src={image} className="img_description_product" />
        </section>

        <section className="section_like">
          {
            <p className="asdsad">
              {" "}
              <FcLike className="icon_heart" />{" "}
            </p>
          }
        </section>

        <section>
          <h2 className="h2_description_product">{name}</h2>
        </section>

        <section>
          <p className="price_description_product">${price}</p>
        </section>

        <section>
          <p className="p_description_product">{description}</p>
        </section>

        <section className="add_items">
          <p className="add_to_cart">Selecciona la cantidad de producto </p>

          <section className="section_add_items">
            <button>
              <BiMinus className="btn_cart" onClick={removeCart} />
            </button>
            <span> {count} </span>
            <button className="btn_cart" onClick={addCart}>
              <GrFormAdd />
            </button>
          </section>

          {count > 0 && <Productuantity product={product} count={count} />}
        </section>

        <button className="btn_retur" onClick={navHome}>
          Regresar <IoIosReturnLeft className="icon_return" />
        </button>
      </section>
    </>
  );
};

export default DescriptionProduct;
