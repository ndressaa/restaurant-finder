import React from 'react';
import ReactStars from 'react-rating-stars-component';

import Card from './RestaurantCard.style';

const RestaurantCard = ({ restaurant, onClick }) => {

  const ratingProps = {
    count: 5,
    value: restaurant.rating,
    edit: false,
    isHalf: true
  };
  
  return (
    <Card onClick={onClick}>
      <div>
        <h2>{restaurant.name}</h2>
        <div>
          <ReactStars {...ratingProps}/>
        </div>
        <p>{restaurant.vicinity || restaurant.formatted_address}</p>
        {restaurant.opening_hours ?
          restaurant.opening_hours.isOpen() ? <p>Aberto</p> : <p>Fechado</p>
        :
          null
        }
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