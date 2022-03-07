import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary01: #929fad;
    --primary02: #778899;
    --primary03: #5f6c7a;

    --secondary01: #ad929f;
    --secondary02: #997788;
    --secondary03: #7a5f6c;

    --tertiary01: #CBE8F2;
    --tertiary02: #B2CFD9;
    --tertiary03: #99B5BF;

    --complementary-white: #F9F9F9;
    --complementary-offwhite: #fffff4;
    --complementary-black: #323133;
    --complementary-gray01: #D6D6D6;
    --complementary-gray02: #ADADAD;
    --complementary-gray03: #848484;
    --complementary-gray04: #5B5B5B;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1366px) {
      font-size: 87.5%; //14px
    }

    @media (max-width: 360px) {
      font-size: 75%; //12px
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    color: var(--complementary-black);
  }

  body, input, textarea, button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }
`;
