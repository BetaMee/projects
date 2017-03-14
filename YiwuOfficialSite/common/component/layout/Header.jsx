import React, {Component} from 'react'
import CSSStyles from './Header.css';

class Header extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <header className={CSSStyles.header}>
        <p className={CSSStyles.logo}>
          index
        </p>
        <ul className={CSSStyles.ul}>
          <li>START</li>
          <li>MORE</li>
          <li>DOWNLOAD</li>
          <li>ABOUTUS</li>          
        </ul>
      </header>
    );
  }
}

export default Header;