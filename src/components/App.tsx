import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import {
  AbvCalculatorPage,
  BrixConverterPage,
  GravityCorrectionPage,
} from '../pages';
import Tabs from './Tabs';

const App: React.FC = () => (
  <Router basename="/abv-calculator">
    <Tabs />
    <LastLocationProvider>
      <Route
        render={({ location }) => (
          <TransitionGroup component={Container}>
            <CSSTransition timeout={1000} classNames="page" key={location?.key}>
              <Switch location={location}>
                <Route path="/" exact component={AbvCalculatorPage} />
                <Route path="/converter" component={BrixConverterPage} />
                <Route
                  path="/gravity-correction"
                  component={GravityCorrectionPage}
                />
                <Route render={() => <Redirect to="/" />} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </LastLocationProvider>
  </Router>
);

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 93vh;
  overflow-y: auto;
  overflow-x: hidden;
`;

export default App;
