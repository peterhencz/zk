import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import Button from '../Button/Button.js';
import Strings from '../Strings';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="navbar">
        <img id="logo" alt="logo" src={logo} />
        <div className="menu">
          <NavLink to="/">
            <Button className="button">{Strings('title')}</Button>
          </NavLink>
          <NavLink to="/about_us">
            <Button className="button">{Strings('about_us')}</Button>
          </NavLink>
          <NavLink to="/completed_projects">
            <Button className="button">{Strings('completed_projects')}</Button>
          </NavLink>
          <NavLink to="how_to">
            <Button className="button">{Strings('how_to')}</Button>
          </NavLink>
          <NavLink to="donate">
            <Button className="button">{Strings('donate')}</Button>
          </NavLink>
          {/* <img src={hu_flag_i} alt="Logo" />
          <img src={gb_flag_i} alt="Logo" /> */}
        </div>
      </div>
    );
  }
}

export default Header;
