import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IndexPage from "./pages/indexPage";
import SpeedDialPage from "./pages/SpeedDialPage/SpeedDialPage";
import RatingPage from "./pages/RatingPage/RatingPage";
import Test from "./components/SpeedDial/test3";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/speeddial" component={SpeedDialPage} />
          <Route exact path="/rating" component={RatingPage} />
          <Route exact path="/test" component={Test} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
