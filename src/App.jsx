import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Layout from "./Pages/Layout";
import Mobiles from "./Pages/Mobiles";
import Computers from "./Pages/Computers";
import TVs from "./Pages/TVs";
import More from "./Pages/More";
import ShopContextProvider from "./Pages/ShopContextProvider";
import Product from "./Pages/Product";

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="mobiles" element={<Mobiles />} />
            <Route path="computers" element={<Computers />} />
            <Route path="tvs" element={<TVs />} />
            <Route path="more" element={<More />} />
            <Route path="product/:id" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
