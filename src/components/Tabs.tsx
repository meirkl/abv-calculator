import React from 'react';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import { dark, light } from '../constants/colors';

const Tabs: React.FC = () => {
  const { pathname } = useLocation();

  const disableActive = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    currentPathname: string,
  ) => {
    if (pathname === currentPathname) {
      e.preventDefault();
    }
  };

  const tabs = [
    {
      to: '/',
      icon: '%',
      text: 'ABV Calculator',
    },
    {
      to: '/converter',
      icon: '⇄',
      text: 'Brix Converter',
    },
    {
      to: '/gravity-correction',
      icon: 'cg',
      text: 'Gravity Correction',
    },
  ];

  return (
    <StyledTabs>
      <ul>
        {tabs.map(({ to, icon, text }) => (
          <Tab active={pathname.endsWith(to)} key={text} tabs={tabs.length}>
            <StyledNavLink
              to={to}
              exact
              activeClassName="active"
              onClick={e => disableActive(e, to)}
            >
              <div>{icon}</div>
              <div>{text}</div>
            </StyledNavLink>
          </Tab>
        ))}
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

const Tab = styled.li<{ active: boolean; tabs: number }>`
  display: inline-block;
  width: ${props => `${100 / props.tabs}%`};
  padding: 4px 0;

  :before {
    display: block;
    position: absolute;
    top: 0;
    width: ${props => `${100 / props.tabs}%`};
    content: '';
    border-top: ${props => (props.active ? 'solid 2px' : 'solid 0')};
  }
`;

const StyledNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  text-align: center;
  font-size: 0.7rem;

  display: block;
  padding-bottom: 0.3rem;

  :not(.active) {
    color: ${light};
  }

  div:first-of-type {
    font-size: 1.5rem;
  }
`;

export default Tabs;
