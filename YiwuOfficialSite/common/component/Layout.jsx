import React, { Component } from 'react';
import Header from './layout/Header';
// import Footer from './layout/Footer';
import CSSStyles from './Layout.css';

class Layout extends Component {
  render() {
    return (
        <div className={CSSStyles.layout}>
  
            <div className={CSSStyles.main}>
              {this.props.children}
            </div>
        </div>
    );
  }
}


export default Layout;