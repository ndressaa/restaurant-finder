import styled from 'styled-components';

const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid var(--light-gray);
  gap: 12px;

  img {
    border-radius: 5px;
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  h2 {
    font-size: 24px;
    color: var(--gray);
  }

  div {
    display: flex;
    align-items: center;
    color: var(--gray);
    gap: 10px;
  }

  div:nth-of-type(1) {
    height: 26px;
    color: var(--medium-gray);
    gap: 5px;

    & > div > div {
      margin-bottom: 5px;
      gap: unset;
    }

    span {
      font-size: 32px;
    }
  }
`;

export default Details;