import React, { Component } from 'react';
import TimeLine from './unit/TimeLine';
import CSSStyles from './JlTimeLine.css';


export default class JlTimeLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TimeArr: ['2018', '2019', '2010', '2011'], // 四个时间点
      PreNum: 0, // 已过期时间点
      NextNum: 0, // 未过期时间点
    };
  }
  render() {
    return (
      <TimeLine
        timeArr={this.state.TimeArr}
        preNum={this.state.PreNum}
        nextNum={this.state.NextNum}
        display={CSSStyles.jltime}
      />
    );
  }
}
