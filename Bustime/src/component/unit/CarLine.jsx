import React from 'react';


function CarLine({ prePercent, lineStyle }) {
  const preLineStyle = {
    stroke: 'red',
    strokeWidth: '100%',
  };
  const nextLineStyle = {
    stroke: 'blue',
    strokeWidth: '100%',
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className={lineStyle}>
      <line
        x1="0%"
        y1="0%"
        x2="0%"
        y2={`${prePercent * 100}%`}
        style={preLineStyle}
      />

      <line
        x1="0%"
        y1={`${prePercent * 100}%`}
        x2="0%"
        y2="100%"
        style={nextLineStyle}
      />
    </svg>
  );
}

export default CarLine;
