import React, { Component } from 'react';
import CarLine from './unit/CarLine';
import SvgCar from './unit/SvgCar';

import CSSStyles from './JlCarLine.css';
import { subtractTimes, compareTime } from './lib/helper';

function JlCarLine({ startTime, endTime, nowTime }) {
  const timeInterval = subtractTimes(endTime, startTime);
  let prePercent;
  // nowTime> endTime说明是晚上，已经过了班车, startTime>nowTime为早上
  if (compareTime(nowTime, endTime) || compareTime(startTime, nowTime)) {
    prePercent = -0.08;
  } else {
    prePercent = subtractTimes(nowTime, startTime) / timeInterval;
  }
  return (
    <div className={CSSStyles.container}>
      <CarLine
        lineStyle={CSSStyles.carline}
        prePercent={prePercent}
      />
      <SvgCar
        carStyle={CSSStyles.svgcar}
        prePercent={prePercent}
      />
    </div>
  );
}

export default JlCarLine;
