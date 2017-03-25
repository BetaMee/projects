import React from 'react';
import TimeLine from './unit/TimeLine';
import CSSStyles from './JlTimeLine.css';
import { compareTime } from './lib/helper';

function JlTimeLine({ disTimeArr, nowTime }) {
  let index;
  for (let i = 0; i < disTimeArr.length - 1; i++) {
    // disTimeArr[i] <= nowTime < disTimeArr[i+1]
    if (!compareTime(disTimeArr[i], nowTime) && compareTime(disTimeArr[i + 1], nowTime)) {
      index = i;
      break;
    }
  }
  const preNum = index + 1;

  return (
    <TimeLine
      timeArr={disTimeArr}
      preNum={preNum}
      disStyle={CSSStyles.jlTimeStyle}
    />
  );
}

export default JlTimeLine;
