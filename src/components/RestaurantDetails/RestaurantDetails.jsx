import React from 'react';
import ReactStars from 'react-rating-stars-component';
import Details from './RestaurantDetails.style';

const RestaurantDetails = (props) => {

  const restaurant = props.restaurant;
  const ratingProps = {
    count: 5,
    value: restaurant.rating,
    edit: false,
    isHalf: true
  };
  const priceLevel = (x) => {
    let price = '';
    for(let i=1; i<=x; i++) {
      price += '$';
    }
    return price;
  }

  return (
    <Details>
      <img width='200px' src={restaurant.photos[0].getUrl()} alt="Restaurant" />
      <p>{restaurant.name}</p>
      <p>{restaurant.rating}</p>
      <ReactStars {...ratingProps}/>
      <p>({restaurant.user_ratings_total})</p>
      <p>{priceLevel(restaurant.price_level)}</p>
      <hr />
      {restaurant.opening_hours ?
          restaurant.opening_hours.isOpen() ? <p>Aberto</p> : <p>Fechado</p>
        :
          <p>Horário não informado</p>
      }
      <p>{restaurant.vicinity || restaurant.formatted_address}</p>
    </Details>
  );
}

export default RestaurantDetails;