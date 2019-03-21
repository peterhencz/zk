import React, { Component } from 'react';
import Header from '../components/Header/Header.js';
import Strings from '../components/Strings';

class MainPage extends Component {
  render() {
    return (
      <div>
        <div className="about-us-title">
          <h1>{Strings('title')}</h1>
        </div>
        <div className="about-us">
          <div className="about-us-container">
            <div className="about-us-description">
              <div className="descripiton green-text">
                <h2>{Strings('why_not_green')}</h2>
              </div>
              <div className="description">
                <p>{Strings('description_1')}</p>
              </div>
              <div className="description">
                <p>{Strings('description_2')}</p>
              </div>
              <div className="description">
                <p>{Strings('description_3')}</p>
              </div>
              <div className="descripiton">
                <p>{Strings('list_element_1')}</p>
              </div>
              <div className="descripiton">
                <p>{Strings('list_element_2')}</p>
              </div>
              <div className="descripiton">
                <p>{Strings('list_element_3')}</p>
              </div>
              <div className="descripiton">
                <p>{Strings('list_element_4')}</p>
              </div>
              <div className="descripiton">
                <p>{Strings('list_element_5')}</p>
              </div>
              <div className="descripiton">
                <p>{Strings('description_4')}</p>
              </div>
              <div className="descripiton">
                <p>{Strings('description_5')}</p>
              </div>
              <div className="descripiton">
                <p>{Strings('description_6')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
