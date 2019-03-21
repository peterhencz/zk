import React, { Component } from 'react';
import Header from '../components/Header/Header.js';
import Strings from '../components/Strings';

class CompletedProjects extends Component {
  render() {
    return (
      <div>
        <div className="about-us-title">
          <h1>{Strings('completed_projects')}</h1>
        </div>
        <div className="about-us">
          <div className="about-us-container">
            <div className="about-us-description">
              <div className="descripiton ">
                <p>{Strings('in_progress')}</p>
              </div>
              <div className="descripiton about-us-description_2">
                <p>{Strings('in_progress_date')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompletedProjects;
