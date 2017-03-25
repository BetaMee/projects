import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import CSSStyles from './SvgCar.css';

function SvgCar({ prePercent, carStyle }) {
  const carpos = {
    top: `${prePercent * 100}%`,
  };
  return (
    <ReactCSSTransitionGroup
      transitionName={{
        appear: CSSStyles.moveCar,
        appearActive: CSSStyles.moveCar,
      }}
      component="div"
      transitionAppear
      transitionAppearTimeout={3000}
      transitionEnterTimeout={1000}
      transitionLeaveTimeout={1000}
    >
      <div
        className={carStyle}
        style={carpos}
      />
    </ReactCSSTransitionGroup>
  );
}

export default SvgCar;
