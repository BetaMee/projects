import React, { Component } from 'react';

import JlCarLine from './JlCarLine';
import JlTimeLine from './JlTimeLine';
import XpCarLine from './XpCarLine';
import XpTimeLine from './XpTimeLine';

import CSSStyles from './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className={CSSStyles.bg}>
        <XpTimeLine />
        <JlTimeLine />

        <XpCarLine />
        <JlCarLine />
      </div>
    );
  }
}
