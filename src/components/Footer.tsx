import React from 'react';
import styled from 'styled-components';
import { light } from '../constants/colors';
import { ReactComponent as GithubIcon } from '../media/github.svg';

const StyledFooter = styled.footer`
  height: 10vh;
  color: ${light};
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  text-align: center;
  > div {
    margin: 8px 0;
  }
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${light};
  > * {
    margin-right: 3px;
  }
`;

const StyledGithubIcon = styled(GithubIcon)`
  width: 20px;
  fill: ${light};
`;

const Footer = (): React.ReactElement => (
  <StyledFooter>
    <div>Copyright &copy; 2020, Meir Keller</div>
    <div>
      <Link
        href="https://github.com/meirkl/abv-calculator"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledGithubIcon />
        abv-calculator
      </Link>
    </div>
  </StyledFooter>
);

export default Footer;
