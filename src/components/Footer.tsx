import React from 'react';
import styled from 'styled-components';
import { light } from '../constants/colors';
import { ReactComponent as GithubIcon } from '../media/github.svg';

const StyledFooter = styled.footer`
  height: 10vh;
  color: ${light};
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  text-align: center;
  > div {
    margin: 8px 0;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${light};
  }
`;

const StyledGithubIcon = styled(GithubIcon)`
  width: 20px;
  margin-right: 3px;
  fill: ${light};
`;

const Footer = () => (
  <StyledFooter>
    <div>&copy; Copyright 2020, Meir Keller</div>
    <div>
      <a
        href="https://github.com/meirkl/abv-calculator"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledGithubIcon />
        abv-calculator
      </a>
    </div>
  </StyledFooter>
);

export default Footer;
