import React from 'react';
import Details from './RestaurantDetails.style';

const RestaurantDetails = (props) => {
  const restaurant = props.restaurant;

  return (
    <Details>
      <p>{restaurant.name}</p>
      <p>{restaurant.vicinity || restaurant.formatted_address}</p>
    </Details>
  );
}

export default RestaurantDetails;