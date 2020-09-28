import React from 'react';
import {
  calculateAbvAlternate,
  calculateAbvStandard,
} from '../utils/functions';
import { Storage, EquationMode } from '../utils/Storage';

type ContextProps = {
  equationMode: EquationMode;
  changeHandler: () => void;
  calculateAbv: (og: number, fg: number) => number;
};

const AbvEquationContext = React.createContext<ContextProps>({
  equationMode: 'standard',
  changeHandler: () => {},
  calculateAbv: () => 0,
});

export const useAbvEquationContext = () => React.useContext(AbvEquationContext);

export const AbvEquationContextProvider: React.FC = ({ children }) => {
  const [equationMode, setEquationMode] = React.useState<EquationMode>(
    'standard',
  );

  React.useEffect(() => {
    const abvEquationMode = Storage.getEquationMode();

    if (abvEquationMode) {
      setEquationMode(abvEquationMode);
    }
  }, []);

  const changeHandler = () => {
    if (equationMode === 'standard') {
      Storage.setEquationMode('alternate');
      setEquationMode('alternate');
    } else {
      Storage.setEquationMode('standard');
      setEquationMode('standard');
    }
  };

  const calculateAbv = (og: number, fg: number) => {
    if (equationMode === 'alternate') {
      return calculateAbvAlternate(og, fg);
    }
    return calculateAbvStandard(og, fg);
  };

  return (
    <AbvEquationContext.Provider
      value={{ equationMode, changeHandler, calculateAbv }}
    >
      {children}
    </AbvEquationContext.Provider>
  );
};

export default AbvEquationContextProvider;
