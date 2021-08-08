import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --brand-red: #d00000;
    --dark-red: #9d0208;
    --mdc-theme-primary: var(--brand-red);
    --light-gray: #e8eaed;
    --gray: #323232;
    --medium-gray: #808080;
    --silver: #f0f0f0;
    --open: #289847;
    --closed: #d22d25;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;