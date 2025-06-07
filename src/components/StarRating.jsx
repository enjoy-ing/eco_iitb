// src/components/StarRating.jsx
import React from 'react';
import { Star } from 'lucide-react';

const StarRating = ({ rating, maxRating = 5, size = 16, showValue = true, className = '' }) => {
  const stars = [];

  for (let i = 1; i <= maxRating; i++) {
    stars.push(
      <Star
        key={i}
        size={size}
        className={`$\{
          i <= Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : i === Math.ceil(rating) && rating % 1 !== 0
            ? 'text-yellow-400 fill-current opacity-50'
            : 'text-gray-300'
        } $\{className}`}
      />
    );
  }

  return (
    <div className="flex items-center space-x-1">
      <div className="flex">
        {stars}
      </div>
      {showValue && (
        <span className="text-sm text-gray-600 ml-1">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default StarRating;