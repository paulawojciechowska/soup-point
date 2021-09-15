import React from 'react';
import MainTemplate from 'components/templates/MainTemplate';
import BackgroundMain from 'components/molecules/BackgroundMain/BackgroundMain';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Switch, Route } from 'react-router-dom';
import { Wrapper, WrapperDark, InfoPlate } from './Root.styles';
import SignUp from 'components/organisms/SignUp/SignUp';
import LogIn from 'components/organisms/LogIn/LogIn';
import Home from 'components/organisms/Home/Home';
import Order from 'components/organisms/Order/Order';

const Root = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <BackgroundMain />
        <WrapperDark />
        <InfoPlate>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/sign">
              <SignUp />
            </Route>
            <Route path="/login">
              <LogIn />
            </Route>
            <Route path="/delivery">
              <h1>delivery</h1>
            </Route>
            <Route path="/order">
              <Order />
            </Route>
          </Switch>
        </InfoPlate>
      </Wrapper>
    </MainTemplate>
  );
};

export default Root;
