import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';

import { 
  Content, 
  SideContainer,
  MapContainer
} from './Home.style';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Content>
      <SideContainer>
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
      </SideContainer>

      <MapContainer>
        mapa
      </MapContainer>
    </Content>
  );
}

export default Home;