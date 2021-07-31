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
  const [showDetails, setShowDetails] = useState(false);
  const { restaurants } = useSelector((state) => state.restaurants);

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      setQuery(inputValue)
    }
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
                  onClick={() => setShowDetails(true)}
                >ver mais</button>
              </>
            )}
            
          </div> :
          <>
            <button
              onClick={() => setShowDetails(false)}
            >voltar</button>
            <RestaurantDetails />
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