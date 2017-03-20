import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import classNames from 'classnames';
import CSSStyles from './Detailpage.css';

class Detailpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFade: true,
    };
  }
  componentDidMount() {
    console.log('Detailpage');
  }

  render() {
    return (
      <div className={classNames(CSSStyles.container, CSSStyles.animated)}>

      </div>
    );
  }
}


export default Detailpage;
