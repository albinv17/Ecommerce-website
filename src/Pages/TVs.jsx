import React, { useContext } from "react";
import "./styles.css";
import { ShopContext } from "./ShopContextProvider";
import { Link } from "react-router-dom";
const TVs = () => {
  let { productlist, addToCart } = useContext(ShopContext);
  let mobileobjs = productlist.filter((obj) => obj.category == "tvs");
  return (
    <div className="products nova-square-regular">
      {mobileobjs &&
        mobileobjs.map((obj) => {
          return (
            <div className="product">
              <Link className="link" to={`/product/${obj.id}`}>
                <img className="dataimg" src={obj.image}></img>
                <span className="objname">{obj.name}</span>
              </Link>
              <span className="buybuttons">
                <button className="buybutton" onClick={() => addToCart(obj)}>
                  Add to cart
                </button>
                <button className="buybutton">Buy now</button>
              </span>
            </div>
          );
        })}
    </div>
  );
};

export default TVs;
