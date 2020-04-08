import React from 'react';
import styled from 'styled-components';
import Calculator from './Calculator';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
`;

const Main = () => (
  <StyledMain>
    <h1>ABV Calculator</h1>
    <Calculator />
  </StyledMain>
);

export default Main;
