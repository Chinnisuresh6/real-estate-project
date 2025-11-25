import React from "react";

export default function SearchBox() {
  return (
    <div className="mt-8 bg-white text-gray-800 rounded-xl shadow-lg p-4 md:p-6">
      <div className="flex flex-col md:flex-row gap-3 items-stretch">

        <select className="w-full md:w-44 border rounded-lg p-3">
          <option>Buy</option>
          <option>Rent</option>
          <option>Commercial</option>
          <option>PG / Co-Living</option>
        </select>

        <input
          type="text"
          placeholder="Search for locality, project, or builder"
          className="flex-1 border rounded-lg p-3"
        />

        <button className="bg-green-500 text-white px-6 py-3 rounded-lg">
          Search
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="text-sm px-3 py-1 bg-gray-100 rounded-full">Paschim Vihar</span>
        <span className="text-sm px-3 py-1 bg-gray-100 rounded-full">Dwarka Mor</span>
        <span className="text-sm px-3 py-1 bg-gray-100 rounded-full">Uttam Nagar</span>
        <span className="text-sm px-3 py-1 bg-gray-100 rounded-full">Sector 24 Rohini</span>
      </div>
    </div>
  );
}