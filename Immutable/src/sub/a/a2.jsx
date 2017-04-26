import React ,{Component} from 'react';



class A2 extends Component{
  constructor(props){
    super(props);
    console.log(`a2 constructor,props are: ${props}`);
  }

  
  componentWillMount() {
    console.log('a2 will mount');
  }

  componentDidMount() {
    console.log('a2 did mount');    
  }

  componentWillReceiveProps(nextProps) {
    console.log(`a2 Will Receive Props: ${nextProps}`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`a2 should Component Update: ${nextProps} + ${nextState}`);
  }
  
  componentWillUpdate (nextProps, nextState) {
    console.log(`a2 Will Update: ${nextProps} + ${nextState}`);    
  }
  
  componentDidUpdate (prevProps, prevState) {
    console.log(`a2 did Update: ${nextProps} + ${nextState}`);        
  }

  componentWillUnmount () {
    console.log(`a2 Will Unmount`);
  }

  render() {
    return (
      <div>
        A2               
      </div>
    );
  }
}


export default A2;