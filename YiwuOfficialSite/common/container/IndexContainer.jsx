import React from 'react';

import Indexpage from '../component/page/Indexpage.jsx';
import {connect} from 'react-redux';

import { DoSyncFoo } from '../action/FooAction.js';

const mapStateToProps = (state, ownProps) => {
  return {
    foo: state.foo//拿到组件index的UIstate
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    doSyncFoo:() =>{//同步，直接改变某些状态
      dispatch(DoSyncFoo());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Indexpage);