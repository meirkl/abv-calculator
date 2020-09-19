import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ExchangeIcon } from '../media/exchange.svg';
import { ReactComponent as PercentIcon } from '../media/percent.svg';
import { light } from '../constants/colors';

export type TabName = 'abv-calculator' | 'brix-converter';

type Props = {
  activeTab: TabName;
  setActiveTab: React.Dispatch<React.SetStateAction<TabName>>;
};

const Tabs: React.FC<Props> = props => {
  const handleChange = (tabName: TabName) => {
    props.setActiveTab(tabName);
  };

  return (
    <StyledTabs>
      <Tab
        active={props.activeTab === 'abv-calculator'}
        onClick={() => handleChange('abv-calculator')}
      >
        <div>
          <PercentIcon />
        </div>
        ABV Calculator
      </Tab>
      <Tab
        active={props.activeTab === 'brix-converter'}
        onClick={() => handleChange('brix-converter')}
      >
        <div>
          <ExchangeIcon />
        </div>
        Brix Converter
      </Tab>
    </StyledTabs>
  );
};

const StyledTabs = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  list-style: none;
`;

const Tab = styled.li<{ active: boolean }>`
  transition: all 1s ease;
  color: ${props => !props.active && light};
  border-bottom: ${props => props.active && '4px solid'};
  font-size: 1.2rem;
  text-align: center;
  cursor: pointer;
  padding: 0.5rem;
  svg {
    height: 2rem;
  }
`;

export default Tabs;
