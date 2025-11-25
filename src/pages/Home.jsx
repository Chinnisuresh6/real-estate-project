import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PropertyCard from "../components/PropertyCard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-3">Housing’s top picks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <PropertyCard
            title="Radhaya Urbanity"
            price="2 & 3 BHK • ₹75L onwards"
            area="Paschim Vihar"
            badge="Verified"
            img="https://source.unsplash.com/800x600/?apartment"
          />

          <PropertyCard
            title="Sunrise Heights"
            price="2 BHK • ₹52L onwards"
            area="Dwarka Mor"
            badge="New"
            img="https://source.unsplash.com/801x600/?flat"
          />

          <PropertyCard
            title="Green Lotus Residency"
            price="3 BHK • ₹1.1Cr onwards"
            area="Uttam Nagar"
            badge="Top Rated"
            img="https://source.unsplash.com/802x600/?luxury"
          />
        </div>
      </main>

      <Footer />
    </>
  );
}