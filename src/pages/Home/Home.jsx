import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import { Div } from './Home.style';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Div>
      <TextField
        label='Search'
        outlined
      >
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </TextField>
    </Div>
  );
}

export default Home;