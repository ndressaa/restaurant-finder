import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
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
          trailingIcon={<MaterialIcon role="button" icon="search" />}
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