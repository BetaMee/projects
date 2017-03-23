import React, { Component } from 'react';
import TimeLine from './unit/TimeLine';
import CSSStyles from './XpTimeLine.css';


export default class XpTimeLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TimeArr: [], // 四个时间点
      PreNum: 0, // 已过期时间点
      NextNum: 0, // 未过期时间点
    };
  }
  render() {
    return (
      <TimeLine
        timeArr={this.state.timeArr}
        preNum={this.state.PreNum}
        nextNum={this.state.NextNum}
        display={CSSStyles.xptime}
      />
    );
  }
}
