import styled, { keyframes } from 'styled-components';

const slideInLeft = keyframes`
  from {
    transform: translate(-100%, 0);
    visibility: visible;
  }

  to {
    transform: translate(0, 0);
  }
`;

const slideInRight = keyframes`
  from {
    transform: translate(100%, 0);
    visibility: visible;
  }

  to {
    transform: translate(0, 0);
  }
`;

export const PageContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* add nav height */
  margin-bottom: 7rem;
`;

export const SlideLeftTransition = styled(PageContent)`
  &.page-enter {
    animation: ${slideInLeft} 0.3s forwards;
  }
  &.page-exit {
    display: none;
  }
`;

export const SlideRightTransition = styled(PageContent)`
  &.page-enter {
    animation: ${slideInRight} 0.3s forwards;
  }
  &.page-exit {
    display: none;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin: 1.2rem 0;
`;
