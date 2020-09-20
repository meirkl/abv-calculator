import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Tabs from './Tabs';
import { AbvCalculatorPage, BrixConverterPage } from '../pages';

const App: React.FC = () => (
  <Wrapper>
    <BrowserRouter basename="/abv-calculator">
      <Switch>
        <Route path="/" exact component={AbvCalculatorPage} />
        <Route path="/converter" component={BrixConverterPage} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
      <Tabs />
    </BrowserRouter>
  </Wrapper>
);

export const Wrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export default App;
