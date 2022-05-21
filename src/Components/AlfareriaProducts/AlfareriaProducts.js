import React from "react";
import AlfareriaDescriptionProducts from "../AlfareriaDescriptionProducts/AlfareriaDescriptionProducts";
import "./AlfareriaProducts.css";

const AlfareriaProducts = ({ items, newBazar }) => {
  return (
    <>
      {newBazar.map((el) => (
    
          <AlfareriaDescriptionProducts
            key={el.id}
            name={el.name}
            image={el.image}
            description={el.description}
            price={el.price}
          />
    
      ))}
    </>
  );
};

export default AlfareriaProducts;
