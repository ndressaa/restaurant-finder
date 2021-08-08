import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  margin-bottom: 12px;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid var(--light-gray);

  &:hover {
    background: var(--silver);
  }

  & > div:nth-child(1) {
    h2 {
      font-size: 22px;
      color: var(--gray);
    }

    & > div {
      display: flex;
      align-items: center;
      gap: 5px;

      & > div {
        margin-bottom: 5px;
      }

      & > span {
        font-size: 32px;
        color: var(--medium-gray);
      }

      & > p {
        color: var(--medium-gray);
      }
    }

    & div + p {
      margin-bottom: 10px;
    }

    & > p {
      color: var(--medium-gray);
      padding-right: 12px;
      font-size: 15px;
    }

    .open {
      color: var(--open);
    }

    .closed {
      color: var(--closed);
    }
  }

  & > div:nth-child(2) {
    display: flex;
    align-items: center;

    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 5px;
    }
  }
`;

export default Card;