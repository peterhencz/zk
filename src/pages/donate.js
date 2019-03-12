import React, { Component } from 'react';
import Header from '../components/Header/Header.js';
import Strings from '../components/Strings';

class Donate extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="center">
          <h1>{Strings('donate')}</h1>
        </div>
      </div>
    );
  }
}

export default Donate;
