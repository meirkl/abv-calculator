import React from 'react';
import Calculator from '../components/Calculator';
import Settings from '../components/Settings';
import AbvEquationContextProvider from '../context/AbvEquation';
import { Title } from './Styles';

const AbvCalculator: React.FC = () => (
  <>
    <Title>ABV Calculator</Title>
    <AbvEquationContextProvider>
      <Calculator />
      <Settings />
    </AbvEquationContextProvider>
  </>
);

export default AbvCalculator;
