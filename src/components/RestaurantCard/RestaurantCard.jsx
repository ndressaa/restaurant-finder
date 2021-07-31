import React from 'react';
import ReactStars from 'react-rating-stars-component';

import Card from './RestaurantCard.style';

const RestaurantCard = ({ restaurant }) => {

  const ratingProps = {
    count: 5,
    value: restaurant.rating,
    edit: false,
    isHalf: true
  };
  
  return (
    <Card>
      <div>
        <h2>{restaurant.name}</h2>
        <ReactStars {...ratingProps}/>
        <p>{restaurant.vicinity || restaurant.formatted_address}</p>
      </div>

      <div>
        <img 
          src={restaurant.photos ? restaurant.photos[0].getUrl() : null} 
          alt="Restaurant"
          width="100px"
        />
      </div>
    </Card>
  );
}

export default RestaurantCard;