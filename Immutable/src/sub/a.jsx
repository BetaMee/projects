import React ,{Component} from 'react';
import A1 from './a/a1';
import A2 from './a/a2';
import A3 from './a/a3';


class A extends Component{
  constructor(props){
    super(props);
    console.log(`A constructor,props are: ${props}`);
  }

  
  componentWillMount() {
    console.log('A will mount');
  }

  componentDidMount() {
    console.log('A did mount');    
  }

  componentWillReceiveProps(nextProps) {
    console.log(`A Will Receive Props: ${nextProps}`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`A should Component Update: ${nextProps} + ${nextState}`);
  }
  
  componentWillUpdate (nextProps, nextState) {
    console.log(`A Will Update: ${nextProps} + ${nextState}`);    
  }
  
  componentDidUpdate (prevProps, prevState) {
    console.log(`A did Update: ${nextProps} + ${nextState}`);        
  }

  componentWillUnmount () {
    console.log(`A Will Unmount`);
  }

  render() {
    return (
      <div>
        <A1/>
        <A2/>
        <A3/>                
      </div>
    );
  }
}


export default A;