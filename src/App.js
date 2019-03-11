import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import MainPage from './pages/main_page';
import CompletedProjects from './pages/completed_projects';
import AboutUs from './pages/about_us';
import HowTo from './pages/how_to';
import Donate from './pages/donate';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/about_us" component={AboutUs} />
          <Route exact path="/completed_projects" component={CompletedProjects} />
          <Route exact path="/how_to" component={HowTo} />
          <Route exact path="/donate" component={Donate} />
        </Switch>
      </Router>
    );
  }
}

export default App;
