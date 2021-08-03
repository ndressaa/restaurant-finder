import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import { 
  RestaurantCard, 
  RestaurantDetails, 
  Map 
} from '../../components/exports';

import Content from './Home.style';

const Home = () => {

  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const { restaurants } = useSelector((state) => state.restaurants);

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      setQuery(inputValue);
      setShowDetails(false);
    }
  }

  function handleClick() {
    setQuery(inputValue);
    setShowDetails(false);
  }

  function handleShowDetails(restaurant) {
    setRestaurantDetails(restaurant);
    setShowDetails(true);
  }

  return (
    <Content>
      <aside>
        <header>
          <TextField
            label='Search'
            outlined
          >
            <Input
              value={inputValue}
              onKeyPress={handleKeyPress}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </TextField>

          <MaterialIcon role="button" icon="search" onClick={() => handleClick()}/>
        </header>
        { !showDetails ?
          <div>
            {restaurants.map((restaurant) => 
              <>
                <RestaurantCard
                  key={restaurant.place_id} 
                  restaurant={restaurant}
                  onClick={() => {handleShowDetails(restaurant)}}
                />
              </>
            )}
          </div> :
          <div>
            <div>
            <button
              onClick={() => setShowDetails(false)}
            >voltar</button>
            </div>
            <RestaurantDetails restaurant={restaurantDetails} />
          </div>
        }
      </aside>

      <main>
        <Map query={query} />
      </main>
    </Content>
  );
}

export default Home;