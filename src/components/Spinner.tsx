import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SpinnerIcon } from '../media/spinner.svg';

const Spinner: React.FC = () => (
  <Wrapper>
    <SpinnerIcon />
  </Wrapper>
);

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  svg {
    height: 3rem;
  }
`;

export default Spinner;
