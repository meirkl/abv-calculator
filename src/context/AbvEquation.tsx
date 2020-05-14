import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  calculateAbvAlternate,
  calculateAbvStandard,
} from '../services/functions';

interface Props {
  children: React.ReactNode;
}

type EquationMode = 'standard' | 'alternate';

interface ContextProps {
  equation: EquationMode;
  changeHandler: () => void;
  calculateAbv: (og: number, fg: number) => number;
}

export const AbvEquationContext = createContext<ContextProps>({
  equation: 'standard',
  changeHandler: () => {},
  calculateAbv: (og: number, fg: number) => 0,
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
      {children}
    </AbvEquationContext.Provider>
  );
};

export default AbvEquationContextProvider;
