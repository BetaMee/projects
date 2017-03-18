import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
// import classNames from 'classnames';
import Header from './layout/Header';
import CSSStyles from './Layout.css';

const EnterTransitionMap = new Map([
  ['/', CSSStyles.fadeInUp],
  ['/detail', CSSStyles.zoomIn],
  ['/download', CSSStyles.flipInX],
  ['/about', CSSStyles.slideInDown],
]);

const LeaveTransitionMap = new Map([
  ['/', CSSStyles.zoomOutUp],
  ['/detail', CSSStyles.slideOutLeft],
  ['/download', CSSStyles.rotateOut],
  ['/about', CSSStyles.slideOutDown],
]);

class Layout extends Component {
  render() {
    console.log("layout");
    const EnterClass = EnterTransitionMap.get(this.props.location.pathname);
    const LeaveClass = LeaveTransitionMap.get(this.props.location.pathname);


    return (
        <div className={CSSStyles.layout}>
            <Header />

            <ReactCSSTransitionGroup
              component="div"
              className={CSSStyles.pageContainer}
              transitionName={{
                enter: EnterClass,
                enterActive: EnterClass,
                leave: LeaveClass,
                leaveActive: LeaveClass,
              }}     
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}
            >
              {
                React.cloneElement(this.props.children, {
                  key: this.props.location.pathname,
                })
              }
            </ReactCSSTransitionGroup>
        </div>
    );
  }
}


export default Layout;