import React ,{Component} from 'react';
import {render} from 'react-dom';

import A from './sub/a.jsx';
import B from './sub/b.jsx';
import C from './sub/c.jsx';


class App extends Component{
  constructor(props){
    super(props);
  }

  
   componentWillMount() {
    console.log('App will mount');
  }

  componentDidMount() {
    console.log('App did mount');    
  }

  componentWillReceiveProps(nextProps) {
    console.log(`App Will Receive Props: ${nextProps}`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`App should Component Update: ${nextProps} + ${nextState}`);
  }
  
  componentWillUpdate (nextProps, nextState) {
    console.log(`App Will Update: ${nextProps} + ${nextState}`);    
  }
  
  componentDidUpdate (prevProps, prevState) {
    console.log(`App did Update: ${nextProps} + ${nextState}`);
  }

  componentWillUnmount () {
    console.log(`App Will Unmount`);
  }

  render() {
    return (
      <div>
        <A/>
        <B/>
        <C/>        
      </div>
    );
  }
}


render(<App/>, document.getElementById('app'));