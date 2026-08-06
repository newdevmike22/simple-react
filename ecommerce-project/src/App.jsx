import axios from "axios";
import { Routes, Route } from "react-router";
import HomePage from "./pages/home/HomePage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import Orders from "./pages/orders/Orders";
import Tracking from "./pages/Tracking";
import { useEffect, useState } from "react";

const App = () => {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    setCart(response.data);
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<Orders cart={cart} />} />
      <Route path="tracking" element={<Tracking />} />
    </Routes>
  );
};

export default App;
