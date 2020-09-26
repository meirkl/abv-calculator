import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { AbvCalculatorPage, BrixConverterPage } from '../pages';
import Tabs from './Tabs';

const App: React.FC = () => (
  <BrowserRouter basename="/abv-calculator">
    <Tabs />
    <Route
      render={({ location }) => (
        <TransitionGroup component={Container}>
          <CSSTransition timeout={1000} classNames="page" key={location?.key}>
            <Switch location={location}>
              <Route path="/" exact component={AbvCalculatorPage} />
              <Route path="/converter" component={BrixConverterPage} />
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  </BrowserRouter>
);

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export default App;
