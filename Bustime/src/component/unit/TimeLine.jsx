import React from 'react';

function TimeLine({timeArr, preNum, NextNum, display}) {
  const node = timeArr.map((time) => {
    return (
      <div>{time}</div>
    );
  });
  return (
    <div className={display}>
      {node}
    </div>
  );
}

export default TimeLine;
