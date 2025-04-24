import React from 'react';

export const ProductCard = ({ title, image, price }) => {
  return (
    <div className="w-64 bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center transition-transform hover:scale-105">
      <img
        src={image}
        alt={title}
        className="w-32 h-32 object-contain mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-emerald-300 font-bold text-md">${price}</p>
    </div>
  )
}
