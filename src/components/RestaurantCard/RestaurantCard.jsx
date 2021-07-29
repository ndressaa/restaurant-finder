import React from 'react';

import Card from './RestaurantCard.style';

const RestaurantCard = () => {
  return (
    <Card>
      <div>
        <h2>Nome do restaurante</h2>
        <div>Avaliação</div>
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