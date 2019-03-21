import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from './components/Header/Header.js';

import MainPage from './pages/main_page';
import CompletedProjects from './pages/completed_projects';
import AboutUs from './pages/about_us';
import HowTo from './pages/how_to';
import Donate from './pages/donate';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={700} classNames="fade">
                <Switch location={location}>
                  <Route exact path="/" component={MainPage} />
                  <Route exact path="/about_us" component={AboutUs} />
                  <Route exact path="/completed_projects" component={CompletedProjects} />
                  <Route exact path="/how_to" component={HowTo} />
                  <Route exact path="/donate" component={Donate} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    );
  }
}

export default App;
