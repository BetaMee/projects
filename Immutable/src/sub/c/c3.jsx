import React ,{Component} from 'react';



class C3 extends Component{
  constructor(props){
    super(props);
  }

  
  componentWillMount() {
    console.log('c3 will mount');
  }

  componentDidMount() {
    console.log('c3 did mount');    
  }

  componentWillReceiveProps(nextProps) {
    console.log(`c3 Will Receive Props: ${nextProps}`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`c3 should Component Update: ${nextProps} + ${nextState}`);
  }
  
  componentWillUpdate (nextProps, nextState) {
    console.log(`c3 Will Update: ${nextProps} + ${nextState}`);    
  }
  
  componentDidUpdate (prevProps, prevState) {
    console.log(`c3 did Update: ${nextProps} + ${nextState}`);        
  }

  componentWillUnmount () {
    console.log(`c3 Will Unmount`);
  }

  render() {
    return (
      <div>
        C3               
      </div>
    );
  }
}


export default C3;