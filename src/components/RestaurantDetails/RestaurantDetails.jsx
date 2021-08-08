import React from 'react';
import ReactStars from 'react-rating-stars-component';
import MaterialIcon from '@material/react-material-icon';
import Details from './RestaurantDetails.style';

const RestaurantDetails = (props) => {

  const restaurant = props.restaurant;
  const ratingProps = {
    count: 5,
    value: restaurant.rating,
    edit: false,
    isHalf: true,
    size: '22',
    color: '#808080'
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
      <h2>{restaurant.name}</h2>
      <div>
        <p>{restaurant.rating}</p>
        <ReactStars {...ratingProps}/>
        <p>({restaurant.user_ratings_total})</p>
        {restaurant.price_level ? 
          <>
            <span>&middot;</span>
            <p>{priceLevel(restaurant.price_level)}</p>
          </>
          : null
        }
      </div>

      {restaurant.opening_hours ?
        <div>
          <MaterialIcon icon="access_time"/>
          {restaurant.opening_hours.open_now ? <p>Aberto</p> : <p>Fechado</p>}
        </div>
        :
        null
      }
      
      <div>
        <MaterialIcon icon="room" />
        <p>{restaurant.vicinity || restaurant.formatted_address}</p>
      </div>
    </Details>
  );
}

export default RestaurantDetails;