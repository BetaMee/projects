import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import CSSStyles from './Indexpage.css';

class Detailpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFade: true,
    };
  }
  componentDidMount() {
    // do something
    console.log('Detailpage');
  }

  render() {
    return (
      <div className={CSSStyles.container}>

      </div>
    );
  }
}


export default Detailpage;
