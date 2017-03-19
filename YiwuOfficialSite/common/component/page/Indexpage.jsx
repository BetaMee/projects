import React, { Component } from 'react';
import classNames from 'classnames';
import CSSStyles from './Indexpage.css';

const svg={
  stroke:"#006600", 
  fill:"#00cc00",
}

class Indexpage extends Component {
  componentDidMount() {
    console.log('indexpage');
  }


  render() {
    return (
      <div className={classNames(CSSStyles.container, CSSStyles.animated)}>
        <svg>
          <circle cx="40" cy="40" r="24" style={svg}/>
         </svg>
      </div>
    );
  }
}

export default Indexpage;
