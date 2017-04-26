import React ,{Component} from 'react';



class B2 extends Component{
  constructor(props){
    super(props);
    console.log(`b2 constructor,props are: ${props}`);
  }

  
  componentWillMount() {
    console.log('b2 will mount');
  }

  componentDidMount() {
    console.log('b2 did mount');    
  }

  componentWillReceiveProps(nextProps) {
    console.log(`b2 Will Receive Props: ${nextProps}`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`b2 should Component Update: ${nextProps} + ${nextState}`);
  }
  
  componentWillUpdate (nextProps, nextState) {
    console.log(`b2 Will Update: ${nextProps} + ${nextState}`);    
  }
  
  componentDidUpdate (prevProps, prevState) {
    console.log(`b2 did Update: ${nextProps} + ${nextState}`);        
  }

  componentWillUnmount () {
    console.log(`b2 Will Unmount`);
  }

  render() {
    return (
      <div>
        B2               
      </div>
    );
  }
}


export default B2;