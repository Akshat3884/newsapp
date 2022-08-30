import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/"><News key="general" country="in" pageSize={8} category="general" /></Route>
            <Route exact path="/business"><News key="business" country="in" pageSize={8} category="business" /></Route>
            <Route exact path="/entertainment"><News key="entertainment" country="in" pageSize={8} category="entertainment" /></Route>
            <Route exact path="/general"><News key="general" country="in" pageSize={8} category="general" /></Route>
            <Route exact path="/health"><News key="health" country="in" pageSize={8} category="health" /></Route>
            <Route exact path="/science"><News key="science" country="in" pageSize={8} category="science" /></Route>
            <Route exact path="/sports"><News key="sports" country="in" pageSize={8} category="sports" /></Route>
            <Route exact path="/technology"><News key="technology" country="in" pageSize={8} category="technology" /></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
