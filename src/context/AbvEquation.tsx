import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  calculateAbvAlternate,
  calculateAbvStandard,
} from '../services/functions';
import ContextDevTool from 'react-context-devtool';

type Props = { children: React.ReactNode };

type EquationMode = 'standard' | 'alternate';

type ContextProps = {
  equation: EquationMode;
  changeHandler: () => void;
  calculateAbv: (og: number, fg: number) => number;
};

const AbvEquationContext = createContext<ContextProps>({
  equation: 'standard',
  changeHandler: () => {},
  calculateAbv: () => 0,
});

export const useAbvEquationContext = (): ContextProps =>
  useContext(AbvEquationContext);

export const AbvEquationContextProvider = ({ children }: Props) => {
  const [equation, setEquation] = useState<EquationMode>('standard');

  useEffect(() => {
    const abvEquationMode = localStorage.getItem(
      'EquationMode',
    ) as EquationMode;

    if (abvEquationMode) {
      setEquation(abvEquationMode);
    }
  }, []);

  const changeHandler = () => {
    if (equation === 'standard') {
      localStorage.setItem('EquationMode', 'alternate');
      setEquation('alternate');
    } else {
      localStorage.setItem('EquationMode', 'standard');
      setEquation('standard');
    }
  };

  const calculateAbv = (og: number, fg: number) => {
    if (equation === 'alternate') {
      return calculateAbvAlternate(og, fg);
    }
    return calculateAbvStandard(og, fg);
  };

  return (
    <AbvEquationContext.Provider
      value={{ equation, changeHandler, calculateAbv }}
    >
      <ContextDevTool
        context={AbvEquationContext}
        id="abv-context"
        displayName="Abv Equation Context"
      />
      {children}
    </AbvEquationContext.Provider>
  );
};

export default AbvEquationContextProvider;
