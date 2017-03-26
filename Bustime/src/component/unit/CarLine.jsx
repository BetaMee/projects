import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import CSSStyles from './CarLine.css';


function CarLine({ prePercent, lineStyle }) {
  const preLineStyle = {
    stroke: 'rgba(255,255,255,0.5)',
    strokeWidth: '100%',
  };
  const nextLineStyle = {
    stroke: 'rgba(255,255,255,0.5)',
    strokeWidth: '100%',
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className={lineStyle}>
      <ReactCSSTransitionGroup
        transitionName={{
          appear: CSSStyles.lineAppaer,
          appearActive: CSSStyles.lineAppaer,
        }}
        component="g"
        transitionAppear
        transitionAppearTimeout={4000}
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
      >
        <line
          key={1}
          x1="0%"
          y1="0%"
          x2="0%"
          y2={`${prePercent * 100}%`}
          style={preLineStyle}
        />
      </ReactCSSTransitionGroup>
      <ReactCSSTransitionGroup
        transitionName={{
          appear: CSSStyles.lineAppaer,
          appearActive: CSSStyles.lineAppaer,
        }}
        component="g"
        transitionAppear
        transitionAppearTimeout={4000}
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
      >
        <line
          key={2}
          x1="0%"
          y1={`${prePercent * 100}%`}
          x2="0%"
          y2="100%"
          style={nextLineStyle}
        />
      </ReactCSSTransitionGroup>
    </svg>
  );
}

export default CarLine;
