import React from 'react';
import CSSStyles from './Clock.css';

function Clock({ timeInterval, station, clockStyle }) {
  return (
    <div className={clockStyle}>
      <div className={CSSStyles.station}>{station}</div>
      <div >next:{timeInterval}min</div>
    </div>
  );
}

export default Clock;
