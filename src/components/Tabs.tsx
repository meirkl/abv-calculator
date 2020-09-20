import React from 'react';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import { darkenDark, light } from '../constants/colors';

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
  background-color: ${darkenDark};
  ul {
    list-style: none;
  }
`;

const Tab = styled.li<{ active: boolean }>`
  display: inline-block;
  width: 50%;

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
  text-align: center;
  font-size: 0.8rem;

  display: block;
  padding-bottom: 5px;

  :not(.active) {
    color: ${light};
  }

  div:first-of-type {
    font-size: 1.8rem;
  }
`;

export default Tabs;
