import { createGlobalStyle } from 'styled-components';
import { dark, primary } from '../constants/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Lobster', cursive;
    background: ${dark};
    color: ${primary};
    font-size: 16px;
  }
  h1 {
    font-size: 2.5rem;
    margin: 20px 0;
  }
`;
