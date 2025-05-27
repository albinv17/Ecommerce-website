import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "./ShopContextProvider";
import "./styles.css";

const Product = () => {
  const productId = useParams();
  const { productlist } = useContext(ShopContext);
  const product = productlist.find((obj) => obj.id == productId.id);

  return (
    <div>
      <span>Product Page</span>
      <br />
      {<img className="prodimg" src={product.image}></img>}
      <br />
      {product.name}
      <br />
      {product.price}
    </div>
  );
};

export default Product;
