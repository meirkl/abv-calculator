import React from 'react';
import styled from 'styled-components';
import Calculator from './Calculator';

const Main = (): React.ReactElement => (
  <StyledMain>
    <h1>ABV Calculator</h1>
    <Calculator />
  </StyledMain>
);

const StyledMain = styled.main`
  height: 87vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Main;
