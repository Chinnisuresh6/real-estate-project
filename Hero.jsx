import React from "react";
import SearchBox from "./SearchBox";

export default function Hero() {
  return (
    <header className="pt-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] text-white">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">

            <div className="md:col-span-7 p-10">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Properties to buy in Delhi
              </h1>
              <p className="mt-3 text-gray-200">
                7K+ listings added daily and 63K+ total verified
              </p>

              <SearchBox />

              <div className="mt-6 inline-block bg-white/10 px-4 py-2 rounded-full text-sm text-white/90">
                Are you a Property Owner?{" "}
                <span className="underline cursor-pointer">Sell / Rent for FREE</span>
              </div>
            </div>

            <div className="md:col-span-5 p-6 flex justify-center">
              <img
                src="/mnt/data/18052606-9fcd-43e1-9011-78db69d7411d.png"
                alt="hero-img"
                className="w-full max-w-md rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}