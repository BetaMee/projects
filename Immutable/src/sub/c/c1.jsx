import React ,{Component} from 'react';



class C1 extends Component{
  constructor(props){
    super(props);
  }

  
  componentWillMount() {
    console.log('c1 will mount');
  }

  componentDidMount() {
    console.log('c1 did mount');    
  }

  componentWillReceiveProps(nextProps) {
    console.log(`c1 Will Receive Props: ${nextProps}`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`c1 should Component Update: ${nextProps} + ${nextState}`);
  }
  
  componentWillUpdate (nextProps, nextState) {
    console.log(`c1 Will Update: ${nextProps} + ${nextState}`);    
  }
  
  componentDidUpdate (prevProps, prevState) {
    console.log(`c1 did Update: ${nextProps} + ${nextState}`);        
  }

  componentWillUnmount () {
    console.log(`c1 Will Unmount`);
  }

  render() {
    return (
      <div>
        C1               
      </div>
    );
  }
}


export default C1;