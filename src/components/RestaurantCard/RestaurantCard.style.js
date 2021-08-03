import styled from 'styled-components';

const Card = styled.div`
  display: flex;

  &:hover {
    background: lightgray;
  }

  & div:nth-child(1) {
    & div {
      display: flex;
    }
  }
`;

export default Card;