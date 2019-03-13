import React, { Component } from 'react';
import Header from '../components/Header/Header.js';
import Strings from '../components/Strings';
import './about_us.scss';

class AboutUs extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="about-us-title">
          <h1>{Strings('about_us')}</h1>
        </div>
        <div className="about-us">
          <div className="about-us-container">
            <div className="about-us-description">
              <div className="descripiton">
                <p>{Strings('about_us_1')}</p>
              </div>
              <div className="descripiton">
                <p>{Strings('about_us_2')}</p>
              </div>
              <div className="descripiton">
                <p>{Strings('about_us_3')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
