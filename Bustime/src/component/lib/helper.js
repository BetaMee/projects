/**
 * Created by Betamee on 2017/3/25.
 */

// 解析时间
const formatTime = (date) => {
  if (typeof date !== 'object' || !(date instanceof Date)) { // date必须为Date类型
    return false;
  }
  let minTime = date.getMinutes();
  let secTime = date.getSeconds();
  if (parseInt(minTime, 10) < 10) {
    minTime = `0${minTime}`;
  }
  if (parseInt(secTime, 10) < 10) {
    secTime = `0${secTime}`;
  }
  return `${date.getHours()}:${minTime}:${secTime}`;
};

// 比较时间
const compareTime = (preTime, nowTime) => { // 如果preTime > nowTime，那么退出，return true
  const preTimeArr = preTime.split(':');
  const nowTimeArr = nowTime.split(':');
  // 比较时
  if (parseInt(preTimeArr[0], 10) > parseInt(nowTimeArr[0], 10)) {
    return true;
  } else if (parseInt(preTimeArr[0], 10) < parseInt(nowTimeArr[0], 10)) {
    return false;
  }
  // 比较分
  if (parseInt(preTimeArr[1], 10) > parseInt(nowTimeArr[1], 10)) {
    return true;
  } else if (parseInt(preTimeArr[1], 10) < parseInt(nowTimeArr[1], 10)) {
    return false;
  }
  // 比较秒
  if (parseInt(preTimeArr[2], 10) > parseInt(nowTimeArr[2], 10)) {
    return true;
  } else if (parseInt(preTimeArr[2], 10) < parseInt(nowTimeArr[2], 10)) {
    return false;
  }
  // 时分秒一样
  return false;
};


// 对时间数组进行分组
const splitTimeZone = (timeArr) => {
  const arrLength = timeArr.length;
  const TimeZoneStackArr = [];
  let TimeZoneStack = [];
  if (arrLength <= 4) { // 如果数组小于4，那么就分一组
    for (let i = 0; i < arrLength; i++) {
      TimeZoneStack.push(timeArr[i]);
    }
    return TimeZoneStackArr.push(TimeZoneStack);
  }
  // 大于4的情况
  let n = 0; // 夹心层的数量
  let zoneNum = 0; // 区块数量
  // 1. 先求出n的值
  if (arrLength % 3 === 2) {
    n = ((arrLength - 2) / 3) - 1;
  } else if (arrLength % 3 === 0) {
    n = (arrLength / 3) - 2;
  } else if (arrLength % 3 === 1) {
    n = ((arrLength - 4) / 3) - 1;
  }
  // 2.得到区块数量
  zoneNum = n + 2;
  // 3.找到标号，分区，总共n+2个标号区
  for (let i = 0; i < zoneNum; i++) {
    TimeZoneStack = []; // 每次循环都要清空；
    if (i === (n + 1)) { // 对于最后一个组，考虑它不一定有四个，那么单独分一下
      for (let j = i * 3; j < arrLength; j++) {
        TimeZoneStack.push(timeArr[j]);
      }
    } else {
      for (let j = i * 3; j < (i * 3) +4; j++) {
        TimeZoneStack.push(timeArr[j]);
      }
    }
    TimeZoneStackArr.push(TimeZoneStack);
  }
  return TimeZoneStackArr;
}

// 选择数组
const getDisplayTimeArr = (timeArr, nowTime) => { // 通过当下时间获取四个或者三个数组
  const TimeZoneArr = splitTimeZone(timeArr);
  let index;
  let headTime;
  let tailTime;
  for (let i = 0; i < TimeZoneArr.length; i++) {
    headTime = TimeZoneArr[i][0]; // 每一个数组的头元素
    tailTime = TimeZoneArr[i][TimeZoneArr[i].length - 1]; // 每一个数组的尾元素
    if (i === 0) { // 首数组特殊处理
      if (compareTime(headTime, nowTime)) { // 当nowTime < headTime，说明还没进入区域
        index = 0;
      }
    }
    if (i === (TimeZoneArr.length - 1)) { // 尾组也要判断
      if (!compareTime(tailTime, nowTime)) { // 当nowTime >= headTime，说明超越了区域
        index = 0;
      }
    }
    // headTime <=nowTime <tailTime
    if (compareTime(tailTime, nowTime) && !compareTime(headTime, nowTime)) {
      index = i;
    }
  }
  return TimeZoneArr[index];
};

// 将时间转换为分钟，以便计算，如12:10:10 变为 12*60+10，忽略秒，因为涉及浮点，而且没有必要计算这个
const convertTimeToNum = (time) => {
  const timeArr = time.split(':');
  return (
    (parseInt(timeArr[0], 10) * 60) + (parseInt(timeArr[1], 10))
  );
}
// 时间相减
const subtractTimes = (time1, time2) => ( // time1-time2
  parseInt(convertTimeToNum(time1) - convertTimeToNum(time2), 10)
);

// 在给定的时间数组中计算
const countTimeInterval = (timeArr, nowTime) => {
  let index;
  // nowTime >timeArr[timeArr.lenght - 1] , 这种情况是已经越过了正常时间，到了晚上了，23:59:00
  if (compareTime(nowTime, timeArr[timeArr.length - 1])) {
    return parseInt(subtractTimes('23:59:00', nowTime) + subtractTimes(timeArr[0], '0:00:00'), 10);
  }
  // timeArr[0] > nowTime,说明是早上，还没发车
  if (compareTime(timeArr[0], nowTime)) {
    return parseInt(subtractTimes(timeArr[0], nowTime), 10);
  }

  for (let i = 0; i < timeArr.length - 1; i++) {
    // timeArr[i] <= nowTime < timeArr[i + 1]
    if (!compareTime(timeArr[i], nowTime) && compareTime(timeArr[i + 1], nowTime)) {
      index = i + 1;
    }
  }
  return subtractTimes(timeArr[index], nowTime);
}

export { formatTime, compareTime, getDisplayTimeArr, subtractTimes, countTimeInterval };

