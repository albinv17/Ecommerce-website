import React, { createContext, useState } from "react";
import all_product from "./Assets/data";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const productlist = all_product;

  const [cart, setCart] = useState([]);

  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setTotal((prevtot) => prevtot + product.price);
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.id === product.id);
      if (index === -1) return prevCart;
      const newCart = [...prevCart];
      newCart.splice(index, 1);
      return newCart;
    });
    setTotal((prevtot) => prevtot - product.price);
  };
  const context = { productlist, cart, addToCart, removeFromCart, total };

  return (
    <ShopContext.Provider value={context}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
