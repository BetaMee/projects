import React from 'react';


function SvgCar({ prePercent, carStyle }) {
  const carpos = {
    top: `${prePercent * 100}%`,
  };
  return (
    <div
      className={carStyle}
      style={carpos}
    />
  );
}

export default SvgCar;
