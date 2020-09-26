import { createGlobalStyle } from 'styled-components';
import { dark, primary } from '../constants/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    /* width */
    ::-webkit-scrollbar {
      width: 5px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      margin: 5px;
      background-color: #999;
      border-radius: 5px;
    }
  }

  body {
    font-family: 'Lobster', cursive;
    background: ${dark.main};
    color: ${primary};
    font-size: 16px;
    overflow-x: hidden;  
  }
`;
