import React from 'react';
import TimeLine from './unit/TimeLine';
import CSSStyles from './XpTimeLine.css';
import { compareTime } from './lib/helper';

function XpTimeLine({ disTimeArr, nowTime }) {
  let index;
  for (let i = 0; i < disTimeArr.length - 1; i++) {
    // disTimeArr[i] <= nowTime < disTimeArr[i+1]
    if (!compareTime(disTimeArr[i], nowTime) && compareTime(disTimeArr[i + 1], nowTime)) {
      index = i;
      break;
    }
  }
  const preNum = index + 1;
  const nextNum = disTimeArr.length - preNum;

  return (
    <TimeLine
      timeArr={disTimeArr}
      preNum={preNum}
      nextNum={nextNum}
      disStyle={CSSStyles.xpTimeStyle}
      preStyle={CSSStyles.xpPreStyle}
      nextStyle={CSSStyles.xpNextStyle}
    />
  );
}

export default XpTimeLine;
