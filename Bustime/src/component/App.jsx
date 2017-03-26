import React, { Component, PropTypes } from 'react';

import JlCarLine from './JlCarLine';
import JlTimeLine from './JlTimeLine';
import XpCarLine from './XpCarLine';
import XpTimeLine from './XpTimeLine';
import Clock from './Clock';
import SiteInfo from './SiteInfo';
// 引入样式
import CSSStyles from './App.css';
// 引入外部函数
import { formatTime, compareTime, getDisplayTimeArr, countTimeInterval } from './lib/helper';


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
    // console.log('app componentDidMount');
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
    // console.log('---app render----');
    const disXpTimeArr = this.state.disXpTimeArr;
    const disJlTimeArr = this.state.disJlTimeArr;
    const nowTime = this.state.nowTime;

    const XpStartTime = disXpTimeArr[0];
    const XpEndTime = disXpTimeArr[disXpTimeArr.length - 1];

    const JlStartTime = disJlTimeArr[0];
    const JlEndTime = disJlTimeArr[disJlTimeArr.length - 1];

    const XpTimeInterval = countTimeInterval(disXpTimeArr, nowTime);
    const JlTimeInterval = countTimeInterval(disJlTimeArr, nowTime);
    // 设置会呼吸的背景
    let bgColor;
    console.log(nowTime);
    // 早上7:00:00 <= nowTime <11:00:00
    if (!compareTime('7:00:00', nowTime) && compareTime('11:00:00', nowTime)) {
      bgColor = {
        backgroundImage: 'linear-gradient(to right, #ffc3a0 0%, #ffafbd 100%)',
      };
      // 下午11:00:00 <= nowTime <18:00:00
    } else if (!compareTime('11:00:00', nowTime) && compareTime('18:00:00', nowTime)) {
      bgColor = {
        backgroundImage: 'linear-gradient(from bottom left, RGB(247,202,201), RGB(146,168,209))',
      };
      // 晚上 11:00:00 <= nowTime <23:59:00
    } else if (!compareTime('18:00:00', nowTime) && compareTime('23:59:00', nowTime)) {
      bgColor = {
        backgroundImage: 'linear-gradient(to top, #88d3ce 0%, #6e45e2 100%)',
      };
    } else {
      bgColor = {
        backgroundImage: 'linear-gradient(to right, #243949 0%, #517fa4 100%)',
      };
    }


    return (
      <div
        className={CSSStyles.bg}
        style={bgColor}
      >
        <Clock
          timeInterval={XpTimeInterval}
          clockStyle={CSSStyles.XpClockStyle}
          station="犀浦北-九里"
        />
        <Clock
          timeInterval={JlTimeInterval}
          clockStyle={CSSStyles.JlClockStyle}
          station="九里-犀浦"
        />

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
        <SiteInfo />
      </div>
    );
  }
}

