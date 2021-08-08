import React from 'react';
import ReactStars from 'react-rating-stars-component';

import Card from './RestaurantCard.style';

const RestaurantCard = ({ restaurant, onClick }) => {

  const ratingProps = {
    count: 5,
    value: restaurant.rating,
    edit: false,
    isHalf: true,
    size: '22',
    color: '#808080'
  };
  const priceLevel = (x = restaurant.price_level) => {
    let price = '';
    for(let i=1; i<=x; i++) {
      price += '$';
    }
    return price;
  }
  
  return (
    <Card onClick={onClick}>
      <div>
        <h2>{restaurant.name}</h2>
        <div>
          <ReactStars {...ratingProps}/>
          {restaurant.price_level ?
            <> 
              <span>&middot;</span>
              <p>{priceLevel()}</p>
            </>
            :
            null
          }
        </div>
        <p>{restaurant.vicinity || restaurant.formatted_address}</p>
        {restaurant.opening_hours ?
          restaurant.opening_hours.open_now ? 
            <p className="open">Aberto</p> 
          : 
            <p className="closed">Fechado</p>
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