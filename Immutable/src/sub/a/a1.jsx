import React ,{Component} from 'react';



class A1 extends Component{
  constructor(props){
    super(props);
    console.log(`a1 constructor,props are: ${props}`);
  }

  
  componentWillMount() {
    console.log('a1 will mount');
  }

  componentDidMount() {
    console.log('a1 did mount');    
  }

  componentWillReceiveProps(nextProps) {
    console.log(`a1 Will Receive Props: ${nextProps}`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`a1 should Component Update: ${nextProps} + ${nextState}`);
  }
  
  componentWillUpdate (nextProps, nextState) {
    console.log(`a1 Will Update: ${nextProps} + ${nextState}`);    
  }
  
  componentDidUpdate (prevProps, prevState) {
    console.log(`a1 did Update: ${nextProps} + ${nextState}`);        
  }

  componentWillUnmount () {
    console.log(`a1 Will Unmount`);
  }

  render() {
    return (
      <div>
        A1               
      </div>
    );
  }
}


export default A1;