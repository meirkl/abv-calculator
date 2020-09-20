import React from 'react';
import {
  calculateAbvAlternate,
  calculateAbvStandard,
} from '../utils/functions';

type Props = { children: React.ReactNode };

type EquationMode = 'standard' | 'alternate';

type ContextProps = {
  equation: EquationMode;
  changeHandler: () => void;
  calculateAbv: (og: number, fg: number) => number;
};

const AbvEquationContext = React.createContext<ContextProps>({
  equation: 'standard',
  changeHandler: () => {},
  calculateAbv: () => 0,
});

export const useAbvEquationContext = (): ContextProps =>
  React.useContext(AbvEquationContext);

export const AbvEquationContextProvider = ({ children }: Props) => {
  const [equation, setEquation] = React.useState<EquationMode>('standard');

  React.useEffect(() => {
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
