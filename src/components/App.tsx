import React, { useEffect } from 'react';
import Main from './Main';
import Footer from './Footer';

const App = () => {
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
    <>
      <Main />
      <Footer />
    </>
  );
};

export default App;
