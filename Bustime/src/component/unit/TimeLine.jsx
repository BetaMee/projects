import React from 'react';

function TimeLine({timeArr, preNum, NextNum, display}) {
  const node = timeArr.map((time) => {
    console.log(time);
    return (
      <li>{time}</li>
    );
  });
  return (
    <ul className={display}>
      {node}
    </ul>
  );
}

export default TimeLine;
