import React from 'react';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import { dark, light } from '../constants/colors';

const Tabs: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <StyledTabs>
      <ul>
        <Tab active={pathname.endsWith('/')}>
          <StyledNavLink to="/" exact activeClassName="active">
            <div>%</div>
            <div>ABV Calculator</div>
          </StyledNavLink>
        </Tab>
        <Tab active={pathname.endsWith('/converter')}>
          <StyledNavLink to="/converter" activeClassName="active">
            <div>⇄</div>
            <div>Brix Converter</div>
          </StyledNavLink>
        </Tab>
      </ul>
    </StyledTabs>
  );
};

const StyledTabs = styled.nav`
  overflow: hidden;
  position: fixed;
  z-index: 1;
  bottom: 0;
  width: 100%;
  background-color: ${dark.dark};
  padding-bottom: env(safe-area-inset-bottom);
  ul {
    list-style: none;
  }
`;

const Tab = styled.li<{ active: boolean }>`
  display: inline-block;
  width: 50%;

  :before {
    display: block;
    position: absolute;
    top: 0;
    width: 50%;
    content: '';
    border-top: ${props => (props.active ? 'solid 3px' : 'solid 0')};
  }
`;

const StyledNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  text-align: center;
  font-size: 1rem;

  display: block;
  padding-bottom: 0.3rem;

  :not(.active) {
    color: ${light};
  }

  div:first-of-type {
    font-size: 2.2rem;
  }
`;

export default Tabs;
