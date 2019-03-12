import React from 'react';
import './Button.scss';

const Button = props => (
  <div className={props}>
    <button {...props} />
  </div>
);

export default Button;
