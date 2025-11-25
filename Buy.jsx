import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Buy() {
  return (
    <>
      <Navbar />
      <div className="pt-28 max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold">Buy Properties</h1>
        <p className="mt-2 text-gray-600">Explore properties for sale.</p>
      </div>
      <Footer />
    </>
  );
}