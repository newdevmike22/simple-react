import "./App.css";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router";

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<div>Test checkout page</div>} />
    </Routes>
  );
};

export default App;
