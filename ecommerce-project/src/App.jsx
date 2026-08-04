import { Routes, Route } from "react-router";
import HomePage from "./components/HomePage";
import CheckoutPage from "./components/CheckoutPage";
import Orders from "./components/Orders";
import Tracking from "./components/Tracking";

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<Orders />} />
      <Route path="tracking" element={<Tracking />} />
    </Routes>
  );
};

export default App;
