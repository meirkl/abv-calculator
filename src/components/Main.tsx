import React from 'react';
import styled from 'styled-components';
import Calculator from './Calculator';

const StyledMain = styled.main`
  height: 87vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = () => (
  <StyledMain>
    <h1>ABV Calculator</h1>
    <Calculator />
  </StyledMain>
);

export default Main;
