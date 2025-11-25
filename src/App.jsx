import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Buy from "./pages/Buy";
import Rent from "./pages/Rent";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/buy" element={<Buy />} />
      <Route path="/rent" element={<Rent />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

