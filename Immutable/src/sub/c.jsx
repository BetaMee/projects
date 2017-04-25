import React ,{Component} from 'react';
import C1 from './c/c1';
import C2 from './c/c2';
import C3 from './c/c3';


class C extends Component{
  constructor(props){
    super(props);
  }

  
  componentWillMount() {
    console.log('C will mount');
  }

  componentDidMount() {
    console.log('C did mount');    
  }

  componentWillReceiveProps(nextProps) {
    console.log(`C Will Receive Props: ${nextProps}`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`C should Component Update: ${nextProps} + ${nextState}`);
  }
  
  componentWillUpdate (nextProps, nextState) {
    console.log(`C Will Update: ${nextProps} + ${nextState}`);    
  }
  
  componentDidUpdate (prevProps, prevState) {
    console.log(`C did Update: ${nextProps} + ${nextState}`);        
  }

  componentWillUnmount () {
    console.log(`C Will Unmount`);
  }

  render() {
    return (
      <div>
        <C1/>
        <C2/>
        <C3/>                
      </div>
    );
  }
}


export default A;