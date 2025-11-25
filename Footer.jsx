import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold text-white mb-2">RealEstate</h4>
          <p className="text-sm">Your trusted property partner.</p>
        </div>

        <div>
          <h5 className="font-semibold mb-2">Explore</h5>
          <ul className="space-y-2 text-sm">
            <li>Buy</li>
            <li>Rent</li>
            <li>Commercial</li>
            <li>Plots</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-2">Company</h5>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-2">Follow</h5>
          <div className="flex gap-3 text-xl">
            <span>📘</span>
            <span>🐦</span>
            <span>📸</span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} RealEstate — All rights reserved
      </div>
    </footer>
  );
}