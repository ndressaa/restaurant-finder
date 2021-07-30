import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import RestaurantDetails from '../../components/RestaurantDetails/RestaurantDetails';
import { Map } from '../../components/index';

import Content from './Home.style';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [showDetails, setShowDetails] = useState(false);

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
                onChange={(e) => setInputValue(e.target.value)}
              />
            </TextField>

            <RestaurantCard />
          </div> :
          <RestaurantDetails />
        }
      </aside>

      <main>
        <Map />
      </main>
    </Content>
  );
}

export default Home;