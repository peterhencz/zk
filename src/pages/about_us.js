import React, { Component } from 'react';
import anime from 'animejs';

import Strings from '../components/Strings';
import './about_us.scss';

class AboutUs extends Component {
  render() {
    return (
      <div>
        <div className="about-us-title">
          <h1>{Strings('about_us')}</h1>
        </div>
        <div className="about-us">
          <div className="about-us-container">
            <div className="about-us-description">
              <div className="descripiton ">
                <p id="text">{Strings('about_us_1')}</p>
              </div>
              <div className="descripiton about-us-description_2">
                <p>{Strings('about_us_2')}</p>
              </div>
              <div className="descripiton about-us-description_2">
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
