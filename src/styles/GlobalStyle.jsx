import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
