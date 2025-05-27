import { useContext } from "react";
import "./styles.css";
import { Link, Outlet } from "react-router-dom";
import { ShopContext } from "./ShopContextProvider";

const Layout = () => {
  const { cart } = useContext(ShopContext);
  let totitems = cart.length;

  return (
    <div>
      <div className="header nova-square-regular">
        <div className="sitelogo">
          <Link to={"/"}>
            <img className="logo" src="src\Pages\Assets\logo.png"></img>
          </Link>
        </div>
        <div className="navbar">
          <ul className="navmenu">
            <li className="navitems">
              <Link className="link" to={"/mobiles"}>
                Mobiles
              </Link>
            </li>
            <li className="navitems">
              <Link className="link" to={"/computers"}>
                Computes
              </Link>
            </li>
            <li className="navitems">
              <Link className="link" to={"/tvs"}>
                TVs
              </Link>
            </li>
            <li className="navitems">
              <Link className="link" to={"/more"}>
                More
              </Link>
            </li>
          </ul>
        </div>
        <div className="cartarea">
          <Link className="link" to={"/cart"}>
            <img className="logo" src="src\Pages\Assets\logo2.png"></img>
            {totitems != 0 ? (
              <span class="badge badge-warning" id="lblCartCount">
                {totitems}
              </span>
            ) : null}
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
