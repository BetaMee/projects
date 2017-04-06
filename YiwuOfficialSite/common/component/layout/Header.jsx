import React, {Component} from 'react'
import {Link} from 'react-router'; 
import CSSStyles from './Header.css';

class Header extends Component{//es6
  constructor(props){
    super(props);//父类
  }
  
  render(){
    console.log("header");
    return (
      <header className={CSSStyles.header}>
        <div className={CSSStyles.logo}>
        logo
        </div>
        <div className={CSSStyles.menu}>
            <Link to="/">HOME</Link>
            <Link to="/detail">MORE</Link>
            <Link to="/download">DOWNLOAD</Link>
            <Link to="/about">ABOUTUS</Link>   
        </div>  
      </header>
    );
  }
}

export default Header;