import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Housing.com_logo.png"
            alt="logo"
            className="h-8"
          />
          <Link to="/" className="font-semibold text-lg">
            RealEstate
          </Link>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-gray-600">
          <li><Link to="/buy">For Buyers</Link></li>
          <li><Link to="/rent">For Tenants</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <button className="bg-gradient-to-r from-green-400 to-green-500 text-white px-4 py-2 rounded-lg">
          Post Property
        </button>
      </div>
    </nav>
  );
}