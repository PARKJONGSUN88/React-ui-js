import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IndexPage from "./pages/indexPage";
import QuickButton from "./components/QuickButton";
import CardFanning from "./components/CardFanning";
import testPage from "./pages/testPage";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/QuickButton" component={QuickButton} />
          <Route exact path="/CardFanning" component={CardFanning} />
          <Route exact path="/testPage" component={testPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
