import React, { Component } from 'react';
import Header from '../components/Header/Header.js';
import Strings from '../components/Strings';

class MainPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="center">
          <h1>{Strings('title')}</h1>
        </div>
      </div>
    );
  }
}

export default MainPage;
