import React from 'react';
import styled from 'styled-components';
import Calculator from './Calculator';
import GlobalStyle from '../services/globalStyle';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const App = () => (
  <>
    <GlobalStyle />
    <h1>ABV Calculator</h1>
    <Container>
      <Calculator />
    </Container>
  </>
);

export default App;
