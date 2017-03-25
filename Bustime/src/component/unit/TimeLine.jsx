import React from 'react';

function TimeLine({ timeArr, preNum, NextNum, disStyle, preStyle, nextStyle }) {
  const node = timeArr.map((time, index) => {
    if (index < preNum) {
      return (
        <div className={preStyle}>{time}</div>
      );
    }
    return (
      <div className={nextStyle}>{time}</div>
    );
  });
  return (
    <div className={disStyle}>
      {node}
    </div>
  );
}

export default TimeLine;
