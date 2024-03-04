import React from 'react';
import Star from '../../public/Star.png'
import HalfStar from '../../public/halfStar.png'

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0; 

  const fullStarElements = [];
  for (let i = 0; i < fullStars; i++) {
    fullStarElements.push(<img key={i} className='h-8 aspect-square' src={Star} alt="Full Star"/>);
  }


  const halfStarElement = hasHalfStar ? <img className='h-8 aspect-square' src={HalfStar} alt="Half Star"/> : null;

  return (
    <div className="flex gap-1">
      {fullStarElements}
      {halfStarElement}
    </div>
  );
};

export default Rating;
