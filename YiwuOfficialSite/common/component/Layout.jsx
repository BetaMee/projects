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
            <ReactCSSTransitionGroup
              component="div"
              className={CSSStyles.page}
              transitionName={{
                appear: CSSStyles.fadeInUp,
                appearActive: CSSStyles.fadeInUp,
                enter: CSSStyles.fadeInUp,
                enterActive: CSSStyles.fadeInUp,
                leave: CSSStyles.fadeInUp,
                leaveActive: CSSStyles.fadeInUp,
              }}
              transitionAppear
              transitionAppearTimeout={10000}           
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