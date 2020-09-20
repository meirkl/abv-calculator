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
    background: ${dark.main};
    color: ${primary};
    font-size: 16px;
  }
`;
