import React, { Component } from 'react';
import Header from '../components/Header/Header.js';
import Strings from '../components/Strings';

class Donate extends Component {
  render() {
    return (
      <div>
        <div className="about-us-title">
          <h1>{Strings('donate')}</h1>
        </div>
        <div className="about-us">
          <div className="about-us-container">
            <div className="about-us-description">
              <div className="descripiton">
                <p>{Strings('donate_description_1')}</p>
              </div>
              <div className="descripiton about-us-description_2">
                <p>{Strings('donate_statement_1')}</p>
                <p>{Strings('donate_statement_2')}</p>
                <p>{Strings('donate_sign')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Donate;
