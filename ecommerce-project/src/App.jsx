import "./App.css";
import { Routes, Route } from "react-router";
import HomePage from "./components/HomePage";
import CheckoutPage from "./components/CheckoutPage";
import Orders from "./components/Orders";

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<Orders />} />
    </Routes>
  );
};

export default App;
