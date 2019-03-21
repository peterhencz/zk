import React, { Component } from 'react';
import hu_flag_i from '../../assets/hu_flag_i.png';
import gb_flag_i from '../../assets/gb_flag_i.png';
import Strings from '../Strings';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="social-media-menu">
          <h4 className="underline">{Strings('social_media')}</h4>
          <p>{Strings('facebook')}</p>
          <p>{Strings('youtube')}</p>
          <p>{Strings('instagram')}</p>
        </div>
        <div className="contact">
          <h4 className="underline">{Strings('contact')}</h4>
          <p>{Strings('contact_mail')}</p>
          <p>{Strings('phone')}</p>
        </div>
        <div />
      </div>
    );
  }
}

export default Footer;
