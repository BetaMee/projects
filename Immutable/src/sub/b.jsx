import React ,{Component} from 'react';
import B1 from './b/b1';
import B2 from './b/b2';
import B3 from './b/b3';


class B extends Component{
  constructor(props){
    super(props);
    console.log(`B constructor,props are: ${props}`);
  }

  
  componentWillMount() {
    console.log('B will mount');
  }

  componentDidMount() {
    console.log('B did mount');    
  }

  componentWillReceiveProps(nextProps) {
    console.log(`B Will Receive Props: ${nextProps}`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`B should Component Update: ${nextProps} + ${nextState}`);
  }
  
  componentWillUpdate (nextProps, nextState) {
    console.log(`B Will Update: ${nextProps} + ${nextState}`);    
  }
  
  componentDidUpdate (prevProps, prevState) {
    console.log(`B did Update: ${nextProps} + ${nextState}`);        
  }

  componentWillUnmount () {
    console.log(`B Will Unmount`);
  }

  render() {
    return (
      <div>
        <B1/>
        <B2/>
        <B3/>                
      </div>
    );
  }
}


export default B;