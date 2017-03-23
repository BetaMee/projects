import React, { Component } from 'react';
import CarLine from './unit/CarLine';
import SvgCar from './unit/SvgCar';

import CSSStyles from './JlCarLine.css';

export default class JlCarLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posX: 10, // 车的位置
      posY: 10,

      prepercent: 20, // 进度条
      nextpercent: 80,
    };
  }
  render() {
    return (
      <div className={CSSStyles.container}>
        <CarLine
          display={CSSStyles.carline}
          prepercent={this.state.prepercent}
          nextpercent={this.state.nextpercent}
        />
        <SvgCar
          display={CSSStyles.svgcar}
          posX={this.state.posX}
          posY={this.state.posY}
        />
      </div>
    );
  }
}
