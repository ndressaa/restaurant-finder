import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import { 
  Content, 
  SearchContainer,
  MapContainer
} from './Home.style';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Content>
      <SearchContainer>
        <TextField
          label='Search'
          outlined
        >
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </TextField>
      </SearchContainer>
      
      <MapContainer>
        mapa
      </MapContainer>
    </Content>
  );
}

export default Home;