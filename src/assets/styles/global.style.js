import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --brand-red: #d00000;
    --dark-red: #9d0208;
    --mdc-theme-primary: var(--brand-red);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;