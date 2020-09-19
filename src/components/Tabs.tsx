import React from 'react';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import { ReactComponent as ExchangeIcon } from '../media/exchange.svg';
import { ReactComponent as PercentIcon } from '../media/percent.svg';
import { light } from '../constants/colors';

const Tabs: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <nav>
      <StyledTabs>
        <Tab active={pathname === '/calculator'}>
          <StyledNavLink to="/calculator" activeClassName="active">
            <div>
              <PercentIcon />
            </div>
            <div>ABV Calculator</div>
          </StyledNavLink>
        </Tab>
        <Tab active={pathname === '/converter'}>
          <StyledNavLink to="/converter" activeClassName="active">
            <div>
              <ExchangeIcon />
            </div>
            <div>Brix Converter</div>
          </StyledNavLink>
        </Tab>
      </StyledTabs>
    </nav>
  );
};

const StyledTabs = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;
`;

const Tab = styled.li<{ active: boolean }>`
  :after {
    display: block;
    content: '';
    border-bottom: solid 3px;
    transform: ${props => (props.active ? 'scaleX(1)' : 'scaleX(0)')};
    transform-origin: ${props => props.active && '0% 50%'};
    transition: ${props =>
      props.active ? 'transform 300ms ease-in' : 'transform 0ms ease-out'};
  }
`;

const StyledNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  font-size: 1rem;
  text-align: center;

  padding: 5px;

  :not(.active) {
    color: ${light};
  }

  svg {
    height: 1.7rem;
  }
`;

export default Tabs;
