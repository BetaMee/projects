import React, { Component } from 'react';
import classNames from 'classnames';
import CSSStyles from './Indexpage.css';


class Indexpage extends Component {
  componentDidMount() {
    console.log('indexpage');
  }

  render() {
    return (
      <div className={classNames(CSSStyles.container, CSSStyles.animated)}>
     
      </div>
    );
  }
}

export default Indexpage;
