import styled from 'styled-components';

const Content = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  font-family: 'Roboto', sans-serif;

  & aside {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 12px;
    width: 100%;
    max-width: 30vw;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    & header {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 12px;

      h1 {
        font-family: 'Roboto Slab', sans-serif;
        font-weight: 400;
        color: var(--brand-red);
        font-size: 42px;

        b {
          font-weight: 600;
        }
      }

      & > div {
        display: flex;
        gap: 12px;
        width: 100%;
      }

      & > div > div {
        width: 100%;
      }

      & i {
        font-size: 36px;
        background: var(--brand-red);
        color: white;
        width: 100%;
        max-width: 56px;
        height: 56px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }

    & div button {
      display: flex;
      align-items: center;
      border-radius: 50%;
      cursor: pointer;
      background: inherit;
      color: var(--gray);
      border: 1px solid var(--light-gray);

      i {
        font-size: 36px;
      }

      &:hover {
        background: var(--silver);
      }
    }
  }

  /* TextField styles */
  .mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label,
  .mdc-text-field--focused .mdc-text-field__input:required ~ .mdc-floating-label::after,
  .mdc-text-field--focused .mdc-text-field__input:required ~ .mdc-notched-outline .mdc-floating-label::after {
    color: var(--brand-red); 
  }

  .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
    border-radius: 10px 0 0 10px; 
  }
  [dir="rtl"] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading, .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir="rtl"] {
    border-radius: 0 10px 10px 0; 
  }
  .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing {
    border-radius: 0 10px 10px 0; 
  }
  [dir="rtl"] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing, .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir="rtl"] {
    border-radius: 10px 0 0 10px; 
  }
`;

export default Content;