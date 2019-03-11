import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';
import Strings from '../Strings';

class Header extends Component {
  render() {
    return (
      <div className="navbar">
        <NavLink to="/">
          <p>{Strings('main_page')}</p>
        </NavLink>
        <NavLink to="/about_us">
          <p>{Strings('about_us')}</p>
        </NavLink>
        <NavLink to="/completed_projects">
          <p>{Strings('completed_projects')}</p>
        </NavLink>
        <NavLink to="how_to">
          <p>{Strings('how_to')}</p>
        </NavLink>
        <NavLink to="donate">
          <p>{Strings('donate')}</p>
        </NavLink>
      </div>
    );
  }
}

export default Header;
