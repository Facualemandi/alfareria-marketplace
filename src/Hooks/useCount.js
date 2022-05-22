import React, { useState } from "react";

export const useCount = () => {
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

  return{
    count,
    addCart,
    removeCart
  };
};
