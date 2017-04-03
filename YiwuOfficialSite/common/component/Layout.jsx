import React, { Component } from 'react';
import CSSStyles from './Layout.css';

class Layout extends Component {
  render() {
    return (
        <div className={CSSStyles.layout}>
            {this.props.children}
        </div>
    );
  }
}

export default Layout;
