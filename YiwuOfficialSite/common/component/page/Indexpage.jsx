import React, { Component } from 'react';
import classNames from 'classnames';
import CSSStyles from './Indexpage.css';

import Part1 from './portion/Part1';
import Part2 from './portion/Part2';
import Part3 from './portion/Part3';
import Part4 from './portion/Part4';
import Part5 from './portion/Part5';


class Indexpage extends Component {
  componentDidMount() {
    console.log('indexpage');
  }

  render() {
    return (
      <div className={CSSStyles.container}>
        <Part1 />
        <Part2 />
        <Part3 />
        <Part4 />
        <Part5 />
      </div>
    );
  }
}

export default Indexpage;
