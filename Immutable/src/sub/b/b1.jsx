import React ,{Component} from 'react';



class B1 extends Component{
  constructor(props){
    super(props);
  }

  
  componentWillMount() {
    console.log('b1 will mount');
  }

  componentDidMount() {
    console.log('b1 did mount');    
  }

  componentWillReceiveProps(nextProps) {
    console.log(`b1 Will Receive Props: ${nextProps}`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`b1 should Component Update: ${nextProps} + ${nextState}`);
  }
  
  componentWillUpdate (nextProps, nextState) {
    console.log(`b1 Will Update: ${nextProps} + ${nextState}`);    
  }
  
  componentDidUpdate (prevProps, prevState) {
    console.log(`b1 did Update: ${nextProps} + ${nextState}`);        
  }

  componentWillUnmount () {
    console.log(`b1 Will Unmount`);
  }

  render() {
    return (
      <div>
        B1               
      </div>
    );
  }
}


export default B1;