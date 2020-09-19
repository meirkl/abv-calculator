import React from 'react';
import styled from 'styled-components';
import AbvEquationContextProvider from '../context/AbvEquation';
import BrixConverter from './BrixConverter';
import Calculator from './Calculator';
import Settings from './Settings';
import Tabs, { TabName } from './Tabs';

const Main: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<TabName>('abv-calculator');

  return (
    <Wrapper>
      <StyledMain>
        {activeTab === 'abv-calculator' ? (
          <>
            <Title>ABV Calculator</Title>
            <AbvEquationContextProvider>
              <Calculator />
              <Settings />
            </AbvEquationContextProvider>
          </>
        ) : (
          <>
            <Title>Brix Converter</Title>
            <>
              <BrixConverter />
            </>
          </>
        )}
      </StyledMain>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  flex: 1 1 0%;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 20px 0;
`;

export default Main;
