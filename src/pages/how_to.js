import React, { Component } from 'react';
import Header from '../components/Header/Header.js';
import Button from '../components/Button/Button.js';
import Strings from '../components/Strings';

class HowTo extends Component {
  render() {
    return (
      <div>
        <div className="about-us-title">
          <h1>{Strings('how_to')}</h1>
        </div>
        <div className="about-us">
          <div className="about-us-container">
            <div className="about-us-description">
              <div className="descripiton">
                <p>{Strings('how_to_description')}</p>
              </div>
              <div className="descripiton about-us-description_2">
                <p>{Strings('in_progress_date')}</p>
              </div>
              <Button className="button">PDF</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HowTo;
