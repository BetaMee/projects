import React, { Component } from 'react';
import classNames from 'classnames';
import CSSStyles from './Download.css';

class Download extends Component {
  componentDidMount() {
    console.log('Download');
  }


  render() {
    return (
      <div className={classNames(CSSStyles.container, CSSStyles.animated)}>

      </div>
    );
  }
}

export default Download;
