import React, { Component } from 'react';
import classNames from 'classnames';
import CSSStyles from './Aboutus.css';

class Aboutus extends Component {
  componentDidMount() {
    console.log('Aboutus');
  }


  render() {
    return (
      <div className={classNames(CSSStyles.container, CSSStyles.animated)}>

      </div>
    );
  }
}

export default Aboutus;
