import React, { useEffect } from 'react';
import Main from './Main';
import Footer from './Footer';
import AbvEquationContextProvider from '../context/AbvEquation';

const App = (): React.ReactElement => {
  useEffect(() => {
    if ('orientation' in window.screen) {
      (async () => {
        try {
          await window.screen.orientation.lock('portrait-primary');
        } catch {}
      })();
    }
  }, []);

  return (
    <AbvEquationContextProvider>
      <Main />
      <Footer />
    </AbvEquationContextProvider>
  );
};

export default App;
