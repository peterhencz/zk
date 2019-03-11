import React from 'react';
import './Button.css';

const Button = props => (
  <div className={props}>
    <button {...props} />
  </div>
);

export default Button;
