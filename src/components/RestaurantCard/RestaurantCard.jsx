import React from 'react';
import ReactStars from 'react-rating-stars-component';

import Card from './RestaurantCard.style';

const ratingProps = {
  count: 5,
  value: 3,
  edit: false,
  isHalf: true
};

const RestaurantCard = () => {
  return (
    <Card>
      <div>
        <h2>Nome do restaurante</h2>
        <ReactStars {...ratingProps}/>
        <p>Endereço</p>
      </div>

      <div>
        <img 
          src="https://zellersrestaurants.com/wp-content/uploads/2019/11/Restaurant.jpg" 
          alt="Restaurant"
          width="100px"
        />
      </div>
    </Card>
  );
}

export default RestaurantCard;