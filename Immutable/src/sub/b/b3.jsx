import React ,{Component} from 'react';



class B3 extends Component{
  constructor(props){
    super(props);
  }

  
  componentWillMount() {
    console.log('b3 will mount');
  }

  componentDidMount() {
    console.log('b3 did mount');    
  }

  componentWillReceiveProps(nextProps) {
    console.log(`b3 Will Receive Props: ${nextProps}`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`b3 should Component Update: ${nextProps} + ${nextState}`);
  }
  
  componentWillUpdate (nextProps, nextState) {
    console.log(`b3 Will Update: ${nextProps} + ${nextState}`);    
  }
  
  componentDidUpdate (prevProps, prevState) {
    console.log(`b3 did Update: ${nextProps} + ${nextState}`);        
  }

  componentWillUnmount () {
    console.log(`b3 Will Unmount`);
  }

  render() {
    return (
      <div>
        B3
      </div>
    );
  }
}


export default B3;