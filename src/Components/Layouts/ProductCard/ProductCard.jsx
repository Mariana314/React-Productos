import React from 'react';

export const ProductCard = ({ title, image, price }) => {
  return (
    <div>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>${price}</p>
    </div>
  )
}
