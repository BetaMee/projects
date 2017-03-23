import React, { Component } from 'react';

import JlCarLine from './JlCarLine';
import JlTimeLine from './JlTimeLine';
import XpCarLine from './XpCarLine';
import XpTimeLine from './XpTimeLine';

import CSSStyles from './App.css';


// 解析时间
const formatTime = (date) => {
  let minTime = date.getMinutes();
  let secTime = date.getSeconds();
  if (parseInt(minTime, 10) < 10) {
    minTime = `0${minTime}`;
  }
  if (parseInt(secTime, 10) < 10) {
    secTime = `0${secTime}`;
  }
  return `${date.getHours()}:${minTime}:${secTime}`;
}

// 比较时间
const compareTime = (preTime, nowTime) => { // 如果preTime > nowTime，那么退出，return true
  const preTimeArr = preTime.split(':');
  const nowTimeArr = nowTime.split(':');

  if (parseInt(preTimeArr[0], 10) > parseInt(nowTimeArr[0], 10)) { // 时分秒
    return true;
  }
  if (parseInt(preTimeArr[1], 10) > parseInt(nowTimeArr[1], 10)) {
    return true;
  }
  if (parseInt(preTimeArr[2], 10) > parseInt(nowTimeArr[2], 10)) {
    return true;
  }
  return false;
}

// 选择数组
const getDisplayTimeArr = (timeArr, nowTime) => { // 通过当下时间获取四个或者三个数组
  const arrLength = timeArr.length;
  let displayArr = [];
  let index; // nowTime的位置
  let counts; // timeArr的分组数

  // 1.计算nowTime的位置
  for (let i = 0; i < arrLength; i++) {
    if (compareTime(timeArr[i], nowTime)) {
      index = i;
      break;
    }

    if (i === arrLength) { // 当nowTime比preTime都大时，则赋值给index以timeArr.length
      index = arrLength;
    }
  }

  // 2. 对timeArr进行分组，确定 4-4-4或者4-4-3或者4-4-2或者4-4-1型,4-4-1需要拆分为4-3-2
  if (arrLength < 4) { // 特殊情况，数组只有不到四个
    counts = 1;
  } else if (arrLength % 4 === 1) {  // 余数为1的4-4-1，拆分
    counts = ((arrLength - 5) / 4) + 2;
  } else {
    counts = (arrLength - (arrLength % 4)) + 1;
  }

  // 3.由index和counts挑选数组
  if (index === arrLength) { // 假如index为arrlength，说明过时了，没有班车了
    displayArr = [];
  } else if (counts === 1) { // 说明数组小于四个，只有分为一组，一般数据足够的情况下是不会发生的
    for (let i = 0; i < arrLength; i++) {
      displayArr.push(timeArr[i]);
    }
  } else {
    const n = (index - (index % 4)) / 4; // 要跳过的组数
    if (arrLength % 4 === 1) { // 对 4-4-1型特别划分
      if ((counts - n) === 2) { // 只剩最后两组
        for (let i = n * 4; i < ((n * 4) + 3); i++) {
          displayArr.push(timeArr[i]);
        }
      } else if ((counts - n) === 1) { // 只剩最后一组
        for (let i = (arrLength - 2); i < arrLength; i++) {
          displayArr.push(timeArr[i]);
        }
      }
    } else if (n === (counts - 1)) { // 恰好只剩最后一组
      for (let i = n * 4; i < arrLength; i++) {
        displayArr.push(timeArr[i]);
      }
    } else { // 只跳过中间部分，这时候有四个数组
      for (let i = n * 4; i < ((n * 4) + 4); i++) {
        displayArr.push(timeArr[i]);
      }
    }
  }
  return displayArr;
}



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      XpTimeArr: this.props.data[0], // 犀浦时间数据
      JlTimeArr: this.props.date[1], //九里时间数据
      nowTime: formatTime(new Date()), // 当下时间
      disXpTimeArr: [], //选中的犀浦时间组，用于将要显示的时间选出来
      disJlTimeArr: [], //选中的九里时间组
    };
  }

  componentDidMount() {
    setTimeout(() => { // 定时器

    }, 1000);
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

