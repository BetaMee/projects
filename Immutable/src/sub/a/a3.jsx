import React ,{Component} from 'react';



class A3 extends Component{
  constructor(props){
    super(props);
  }

  
  componentWillMount() {
    console.log('a3 will mount');
  }

  componentDidMount() {
    console.log('a3 did mount');    
  }

  componentWillReceiveProps(nextProps) {
    console.log(`a3 Will Receive Props: ${nextProps}`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`a3 should Component Update: ${nextProps} + ${nextState}`);
  }
  
  componentWillUpdate (nextProps, nextState) {
    console.log(`a3 Will Update: ${nextProps} + ${nextState}`);    
  }
  
  componentDidUpdate (prevProps, prevState) {
    console.log(`a3 did Update: ${nextProps} + ${nextState}`);        
  }

  componentWillUnmount () {
    console.log(`a3 Will Unmount`);
  }

  render() {
    return (
      <div>
        A3               
      </div>
    );
  }
}


export default A3;