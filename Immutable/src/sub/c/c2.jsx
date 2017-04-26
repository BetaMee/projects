import React ,{Component} from 'react';



class C2 extends Component{
  constructor(props){
    super(props);
    console.log(`c2 constructor,props are: ${props}`);
  }

  
  componentWillMount() {
    console.log('c2 will mount');
  }

  componentDidMount() {
    console.log('c2 did mount');    
  }

  componentWillReceiveProps(nextProps) {
    console.log(`c2 Will Receive Props: ${nextProps}`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`c2 should Component Update: ${nextProps} + ${nextState}`);
  }
  
  componentWillUpdate (nextProps, nextState) {
    console.log(`c2 Will Update: ${nextProps} + ${nextState}`);    
  }
  
  componentDidUpdate (prevProps, prevState) {
    console.log(`c2 did Update: ${nextProps} + ${nextState}`);        
  }

  componentWillUnmount () {
    console.log(`c2 Will Unmount`);
  }

  render() {
    return (
      <div>
        C2               
      </div>
    );
  }
}

export default C2;
