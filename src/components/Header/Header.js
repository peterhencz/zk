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
            <Button className="button-menu">{Strings('main_page')}</Button>
          </NavLink>
          <NavLink to="/about_us">
            <Button className="button-menu">{Strings('about_us')}</Button>
          </NavLink>
          <NavLink to="/completed_projects">
            <Button className="button-menu">{Strings('completed_projects')}</Button>
          </NavLink>
          <NavLink to="how_to">
            <Button className="button-menu">{Strings('how_to')}</Button>
          </NavLink>
          <NavLink to="donate">
            <Button className="button-menu">{Strings('donate')}</Button>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Header;
