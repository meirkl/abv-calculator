import React, { useEffect } from 'react';
import Main from './Main';
import Footer from './Footer';

const App = () => {
  useEffect(() => {
    if (
      'orientation' in window.screen &&
      window.screen.orientation.type === 'landscape-primary'
    ) {
      window.screen.orientation.lock('landscape-primary');
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
