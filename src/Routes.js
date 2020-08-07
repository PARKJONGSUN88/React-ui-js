import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IndexPage from './pages/indexPage';
import SpeedDialPage from './pages/SpeedDialPage';
import CardFanningPage from './pages/CardFanningPage';
import QuickButtonPage from './pages/QuickButtonPage';
import RelayBoardPage from './pages/RelayBoardPage';
import JellyPopPage from './pages/JellyPopPage';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/SpeedDialPage" component={SpeedDialPage} />
          <Route exact path="/CardFanningPage" component={CardFanningPage} />
          <Route exact path="/QuickButtonPage" component={QuickButtonPage} />
          <Route exact path="/RelayBoardPage" component={RelayBoardPage} />
          <Route exact path="/JellyPopPage" component={JellyPopPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
