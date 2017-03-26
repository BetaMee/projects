import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import CSSStyles from './SvgCar.css';

function SvgCar({ prePercent, pointerStyle, upTriangleStyle, downTriangleStyle, upSquareStyle, downSquareStyle }) {
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
        className={pointerStyle}
        style={carpos}
      >
        <div  className={upSquareStyle} />
        <div className={upTriangleStyle} />

        <div className={downSquareStyle} />
        <div className={downTriangleStyle} />
      </div>
    </ReactCSSTransitionGroup>
  );
}

export default SvgCar;
