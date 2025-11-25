import React from "react";

export default function PropertyCard({ title, price, area, badge, img }) {
  return (
    <article className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <img src={img} alt={title} className="w-full h-48 object-cover" />

      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600 mt-1">{price}</p>

        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <span>{area}</span>
          <span>{badge}</span>
        </div>
      </div>
    </article>
  );
}