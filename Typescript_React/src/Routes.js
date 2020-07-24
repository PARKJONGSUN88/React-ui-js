import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IndexPage from './pages/indexPage';
import SpeedDialPage from './pages/SpeedDialPage';
import CardFanningPage from "./pages/CardFanningPage";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/SpeedDialPage" component={SpeedDialPage} />
          <Route exact path="/CardFanningPage" component={CardFanningPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
