import React, { Component } from 'react';
import CarLine from './unit/CarLine';
import SvgCar from './unit/SvgCar';

import CSSStyles from './XpCarLine.css';
import { subtractTimes } from './lib/helper';

function XpCarLine({ startTime, endTime, nowTime }) {
  const timeInterval = subtractTimes(endTime, startTime);
  const prePercent = subtractTimes(nowTime, startTime) / timeInterval;
  console.log('---XP----');
  console.log(timeInterval);
  console.log(prePercent);
  console.log('---*---');
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

export default XpCarLine;
