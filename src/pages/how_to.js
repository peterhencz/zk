import React, { Component } from 'react';
import Header from '../components/Header/Header.js';
import Strings from '../components/Strings';

class HowTo extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="center">
          <h1>{Strings('how_to')}</h1>
        </div>
      </div>
    );
  }
}

export default HowTo;
