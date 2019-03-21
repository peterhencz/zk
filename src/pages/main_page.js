import React, { Component } from 'react';
import { DONATION_AMOUNT, SPONSOR_AMOUNT } from '../components/resources/constants';
import Footer from '../components/Footer/Footer.js';
import Strings from '../components/Strings';
import insta1 from '../assets/insta1.jpg';
import insta2 from '../assets/insta2.jpg';
import insta3 from '../assets/insta3.jpg';
import insta4 from '../assets/insta4.jpg';
import insta5 from '../assets/insta5.jpg';
import insta6 from '../assets/insta6.jpg';
import insta7 from '../assets/insta7.jpg';
import insta8 from '../assets/insta8.jpg';
import insta9 from '../assets/insta9.jpg';
import './main_page.scss';
class MainPage extends Component {
  constructor() {
    super();

    this.state = {
      transform: '',
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = event => {
    const position = event.srcElement.scrollingElement.scrollTop;
    if (position > 40) {
      this.setState({
        titleScale: '0.6',
        titleTranslateX: '-10vw',
      });
    } else {
      this.setState({
        titleScale: '1',
        titleTranslateX: '0',
      });
    }
    if (position > 100 && position < 500) {
      this.setState({
        counterOpacity: '0.8',
        display: 'flex',
        counterTranslateX: '0',
      });
    } else {
      this.setState({
        counterOpacity: '0',
        display: 'flex',
        counterTranslateX: '-10vw',
      });
    }
    if (position > 500 && position < 900) {
      this.setState({
        counter2Opacity: '0.8',
        display: 'flex',
        counter2TranslateX: '0',
      });
    } else {
      this.setState({
        counter2Opacity: '0',
        display: 'flex',
        counter2TranslateX: '-10vw',
      });
    }
    if (position > 1000) {
      this.setState({
        mainCenterOpacity: '1',
        mainTop: '110vh',
        mainHeight: '100%',
      });
    } else {
      this.setState({
        mainCenterOpacity: '0',
        mainTop: '160vh',
      });
    }
    if (position > 1100) {
      this.setState({
        instafeedOpacity: '1',
        instaScale: '1',
        hashtagScale: '1',
        hashtagTranslateX: '0',
        titleTranslateX: '-100vw',
      });
    } else {
      this.setState({
        instafeedOpacity: '0',
        hashtagScale: '0.2',
        hashtagTranslateX: '-100vw',
        instaScale: '0.2',
      });
    }
  };

  render() {
    return (
      <div className="page">
        <div className="about-us-title">
          <h1
            style={{
              transform: `translateX(${this.state.titleTranslateX}) scale(${
                this.state.titleScale
              })`,
            }}>
            {Strings('title')}
          </h1>
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
              <div className="description green-text">
                <h2>{Strings('description_3')}</h2>
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
        <div
          className="main-center"
          style={{
            opacity: this.state.mainCenterOpacity,
            top: this.state.mainTop,
            height: this.state.mainHeight,
          }}>
          <div className="hashtagTitle">
            <h1
              style={{
                transform: `translateX(${this.state.hashtagTranslateX}) scale(${
                  this.state.hashtagScale
                })`,
              }}>
              {Strings('hashtagTitle')}
            </h1>
          </div>
          <div
            className="instafeed"
            style={{
              opacity: this.state.instafeedOpacity,
              transform: `translateX(${this.state.instaTranslateX})
              scale(${this.state.instaScale})`,
            }}>
            <img src={insta1} alt="insta" />
            <img src={insta2} alt="insta" />
            <img src={insta3} alt="insta" />
            <img src={insta4} alt="insta" />
            <img src={insta5} alt="insta" />
            <img src={insta6} alt="insta" />
            <img src={insta7} alt="insta" />
            <img src={insta8} alt="insta" />
            <img src={insta9} alt="insta" />
          </div>
          <Footer />
        </div>
        <div
          className="counter1"
          style={{
            opacity: this.state.counterOpacity,
            display: this.state.display,
            transform: `translateX(${this.state.counterTranslateX})`,
          }}>
          <p className="counter-number text green-text">{SPONSOR_AMOUNT}</p>
          <h3>{Strings('counter_sponsor')}</h3>
        </div>
        <div
          className="counter2"
          style={{
            opacity: this.state.counter2Opacity,
            display: this.state.display,
            transform: `translateX(${this.state.counter2TranslateX})`,
          }}>
          <p className="counter-number text green-text">{DONATION_AMOUNT}</p>
          <h3>{Strings('counter_money')}</h3>
        </div>
      </div>
    );
  }
}

export default MainPage;
