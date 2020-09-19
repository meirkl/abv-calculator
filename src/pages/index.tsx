import React from 'react';
import { StyledMain } from './Styles';

const AbvCalculator = React.lazy(() => import('./abv-calculator'));
const BrixConverter = React.lazy(() => import('./brix-converter'));

export const AbvCalculatorPage: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <StyledMain>
        <AbvCalculator />
      </StyledMain>
    </React.Suspense>
  );
};

export const BrixConverterPage: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <StyledMain>
        <BrixConverter />
      </StyledMain>
    </React.Suspense>
  );
};
