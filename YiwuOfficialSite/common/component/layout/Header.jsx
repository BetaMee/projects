import React, {Component} from 'react'
import {Link} from 'react-router'; 
import CSSStyles from './Header.css';

class Header extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <header className={CSSStyles.header}>
        <Link to="/">HOME</Link>
        <Link to="/detail">MORE</Link>
        <Link to="/download">DOWNLOAD</Link>
        <Link to="/about">ABOUTUS</Link>     
      </header>
    );
  }
}

export default Header;