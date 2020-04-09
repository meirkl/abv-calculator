import { createGlobalStyle } from 'styled-components';
import { dark, primary } from '../constants/colors';
import lobster from '../fonts/Lobster-Regular.ttf';
import roboto from '../fonts/Roboto-Regular.ttf';

export default createGlobalStyle`
   @font-face {
    font-family: 'Lobster';
    src: url(${lobster});
    font-style: normal;
    font-weight: 400;
  }
  @font-face {
    font-family: 'Roboto';
    src: url(${roboto});
    font-style: normal;
    font-weight: 400;
  }
  * {
    box-sizing: border-box;
  }
  html,
  body {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Lobster', cursive;
    background: ${dark};
    color: ${primary};
    font-size: 16px;
  }
  h1 {
    font-size: 2.5rem;
  }
`;
