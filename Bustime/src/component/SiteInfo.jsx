import React from 'react';
import CSSStyles from './SiteInfo.css';

function Clock() {
  return (
    <div className={CSSStyles.info}>
      <p>注：本应用依据后勤2016.5.3发布的时刻表，包含加车情况，仅供参考</p>
    </div>
  );
}

export default Clock;
