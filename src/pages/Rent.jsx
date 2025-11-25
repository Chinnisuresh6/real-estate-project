import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Rent() {
  return (
    <>
      <Navbar />
      <div className="pt-28 max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold">Rent Properties</h1>
        <p className="mt-2 text-gray-600">Find rental homes easily.</p>
      </div>
      <Footer />
    </>
  );
}