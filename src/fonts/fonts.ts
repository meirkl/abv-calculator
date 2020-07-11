import { createGlobalStyle } from 'styled-components';
import Lobster from '../fonts/Lobster-Regular.woff2';
import Roboto from '../fonts/Roboto-Regular.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: 'Lobster';
    font-style: normal;
    font-weight: 400;
    src: local('Lobster Regular'), local('Lobster-Regular'), url(${Lobster}) format('woff2');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Roboto'), local('Roboto-Regular'), url(${Roboto}) format('woff2');
  }
`;
