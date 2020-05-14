import React from 'react';
import styled from 'styled-components';
import Calculator from './Calculator';
import Settings from './Settings';
import AbvEquationContextProvider from '../context/AbvEquation';

const Main = (): React.ReactElement => (
  <StyledMain>
    <h1>ABV Calculator</h1>
    <AbvEquationContextProvider>
      <Calculator />
      <Settings />
    </AbvEquationContextProvider>
  </StyledMain>
);

const StyledMain = styled.main`
  height: 87vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Main;
