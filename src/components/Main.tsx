import React from 'react';
import styled from 'styled-components';
import AbvEquationContextProvider from '../context/AbvEquation';
import Calculator from './Calculator';
import Settings from './Settings';

const Main: React.FC = () => (
  <StyledMain>
    <Title>ABV Calculator</Title>
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

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 20px 0;
`;

export default Main;
