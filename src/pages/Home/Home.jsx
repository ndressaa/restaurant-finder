import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import RestaurantDetails from '../../components/RestaurantDetails/RestaurantDetails';
import { Map } from '../../components/index';

import Content from './Home.style';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [placeId, setPlaceId] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      setQuery(inputValue)
    }
  }

  function handleShowDetails(restaurant, placeId) {
    setPlaceId(placeId);
    setRestaurantDetails(restaurant);
    setShowDetails(true);
  }

  return (
    <Content>
      <aside>
        { !showDetails ?
          <div>
            <TextField
              label='Search'
              outlined
              trailingIcon={<MaterialIcon role="button" icon="search" />}
            >
              <Input
                value={inputValue}
                onKeyPress={handleKeyPress}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </TextField>

            {restaurants.map((restaurant) => 
              <>
                <RestaurantCard
                  key={restaurant.place_id} 
                  restaurant={restaurant}
                />
                <button
                  onClick={() => {
                    // setShowDetails(true);
                    // setPlaceId(restaurant.place_id);
                    // setRestaurantDetails(restaurant);
                    // console.log(restaurant.place_id);

                    handleShowDetails(restaurant, restaurant.place_id)
                  }}
                >ver mais</button>
              </>
            )}
            
          </div> :
          <>
            <button
              onClick={() => setShowDetails(false)}
            >voltar</button>
            <RestaurantDetails restaurant={restaurantDetails}>
            </RestaurantDetails>
          </>
        }
      </aside>

      <main>
        <Map query={query} />
      </main>
    </Content>
  );
}

export default Home;