import React from 'react';
import CSSStyles from './TimeLine.css';

function TimeLine({ timeArr, preNum, disStyle }) {
  const node = timeArr.map((time, index) => {
    if (index < preNum) {
      return (
        <div className={CSSStyles.expired} key={time}>{time}</div>
      );
    }
    return (
      <div className={CSSStyles.next} key={time}>{time}</div>
    );
  });
  return (
    <div className={`${disStyle} ${CSSStyles.fontStyle}`}>
      {node}
    </div>
  );
}

export default TimeLine;
