import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import classNames from 'classnames';
import Header from './layout/Header';

import CSSStyles from './Layout.css';


class Layout extends Component {
  render() {
    console.log("layout");
    return (
        <div className={CSSStyles.layout}>
            <Header />

            <ReactCSSTransitionGroup
              component="div"
              className={CSSStyles.pageContainer}
              transitionName={{
                enter: CSSStyles.fadeInUp,
                enterActive: CSSStyles.fadeInUp,
                leave: CSSStyles.zoomOutUp,
                leaveActive: CSSStyles.zoomOutUp,
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