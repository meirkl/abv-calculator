import { createGlobalStyle } from 'styled-components';
import { dark, yellow } from '../constants/colors';
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
  body {
    font-family: 'Lobster', cursive;
    margin: 0;
    padding: 0;
    background: ${dark};
  }
  h1 {
    color: ${yellow};
    text-align: center;
    font-size: 40px;
  }
`;
