import React, { Component, PropTypes } from 'react';

import JlCarLine from './JlCarLine';
import JlTimeLine from './JlTimeLine';
import XpCarLine from './XpCarLine';
import XpTimeLine from './XpTimeLine';
// 引入样式
import CSSStyles from './App.css';
// 引入外部函数
import { formatTime, compareTime, getDisplayTimeArr } from './lib/helper';


export default class App extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(React.PropTypes.array),
  }

  static defaultProps = {
    data: [[], []],
  }

  constructor(props) {
    super(props);
    const nowTime = formatTime(new Date());
    this.state = {
      disXpTimeArr: getDisplayTimeArr(this.props.data[0], nowTime), // 选中的犀浦时间组，用于将要显示的时间选出来
      disJlTimeArr: getDisplayTimeArr(this.props.data[1], nowTime), // 选中的九里时间组
      nowTime, // 当下时间
    };
  }

  componentDidMount() {
    console.log('app componentDidMount');
    setInterval(() => { // 定时器
      const nowTime = formatTime(new Date()); // 当下时间
      let disXpTimeArr = [];
      let disJlTimeArr = [];
      let isXpExpired = false;
      let isJlExpired = false;
      // 验证是否过期
      const preXpTailTime = this.state.disXpTimeArr[this.state.disXpTimeArr.length - 1];
      const preJlTailTime = this.state.disJlTimeArr[this.state.disJlTimeArr.length - 1];
      // 对于犀浦时间，tailTime <=nowTime ，说明进入一个新的区域
      if (!compareTime(preXpTailTime, nowTime)) {
        disXpTimeArr = getDisplayTimeArr(this.props.data[0], nowTime);
        isXpExpired = true;
      }
      // 对于九里时间，tailTime <=nowTime ，说明进入一个新的区域
      if (!compareTime(preJlTailTime, nowTime)) {
        disJlTimeArr = getDisplayTimeArr(this.props.data[1], nowTime);
        isJlExpired = true;
      }

      this.setState({
        nowTime,
        disXpTimeArr: isXpExpired === true ? disXpTimeArr : this.state.disXpTimeArr,
        disJlTimeArr: isJlExpired === true ? disJlTimeArr : this.state.disJlTimeArr,
      });
    }, 1000);
  }

  render() {
    console.log('---app render----');
    console.log(this.state);
    console.log('---*---');

    const disXpTimeArr = this.state.disXpTimeArr;
    const disJlTimeArr = this.state.disJlTimeArr;
    const nowTime = this.state.nowTime;

    const XpStartTime = disXpTimeArr[0];
    const XpEndTime = disXpTimeArr[disXpTimeArr.length - 1];

    const JlStartTime = disJlTimeArr[0];
    const JlEndTime = disJlTimeArr[disJlTimeArr.length - 1];
    return (
      <div className={CSSStyles.bg}>
        <XpTimeLine
          disTimeArr={disXpTimeArr}
          nowTime={nowTime}
        />
        <JlTimeLine
          disTimeArr={disJlTimeArr}
          nowTime={nowTime}
        />

        <XpCarLine
          startTime={XpStartTime}
          endTime={XpEndTime}
          nowTime={nowTime}
        />
        <JlCarLine
          startTime={JlStartTime}
          endTime={JlEndTime}
          nowTime={nowTime}
        />
      </div>
    );
  }
}

