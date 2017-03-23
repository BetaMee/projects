import React, { Component } from 'react';
import TimeLine from './unit/TimeLine';
import CSSStyles from './XpTimeLine.css';


export default class XpTimeLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TimeArr: ['2015', '2016', '2018', '2017'], // 四个时间点
      PreNum: 0, // 已过期时间点
      NextNum: 0, // 未过期时间点
    };
  }
  render() {
    console.log(CSSStyles);
    return (
      <TimeLine
        timeArr={this.state.TimeArr}
        preNum={this.state.PreNum}
        nextNum={this.state.NextNum}
        display={CSSStyles.xptime}
      />
    );
  }
}
