import React from "react";
import AlfareriaDescriptionProducts from "../AlfareriaDescriptionProducts/AlfareriaDescriptionProducts";
import "./AlfareriaProducts.css";

const AlfareriaProducts = ({ items, newBazar, totalItemDescription }) => {
  return (
    <>
      {newBazar.map((el) => (
    
          <AlfareriaDescriptionProducts
            key={el.id}
            el={el}
            id={el.id}
            name={el.name}
            image={el.image}
            description={el.description}
            price={el.price}
            totalItemDescription={totalItemDescription}
            
          />
    
      ))}
    </>
  );
};

export default AlfareriaProducts;
