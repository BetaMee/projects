import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import CSSStyles from './Indexpage.css';

class Indexpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFade: true,
    };
  }
  componentDidMount() {
    // do something
    console.log('indexpage');
  }

  handleClick=() => {
    this.setState({
      isFade:!this.state.isFade
    });
  }
  render() {
    console.log(CSSStyles.slideInLeft);
    console.log(this.state.isFade);    
    return (
      <div>
         <button onClick={(e)=> this.handleClick()}>hhhhhhh</button>
      <ReactCSSTransitionGroup
        transitionName={{
          appear: CSSStyles.slideInLeft,
          appearActive: CSSStyles.slideInLeft,
          enter: CSSStyles.slideInLeft,
          enterActive: CSSStyles.slideInLeft,
          leave: CSSStyles.slideOutRight,
          leaveActive: CSSStyles.slideOutRight,
        }}
        transitionAppear
        transitionAppearTimeout={1000}
        transitionEnterTimeout={10000}
        transitionLeaveTimeout={10000}
        component="div"
      >
        { this.state.isFade === true ? (
          <div className={`${CSSStyles.main} ${CSSStyles.animated}`} key={0} />            
        ) : (
          <div className={`${CSSStyles.main2} ${CSSStyles.animated}`} key={1} />            
        )}
      </ReactCSSTransitionGroup>
   
      </div>
    );
  }
}

// Indexpage.proTypes = {

// };

export default Indexpage;
