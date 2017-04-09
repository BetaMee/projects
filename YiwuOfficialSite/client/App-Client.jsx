import React from 'react';
import ReactDOM from 'react-dom';
// 路由管理
import { Router, browserHistory } from 'react-router';
import AppRoutes from '../common/AppRoutes';
// 状态管理


function Root() {
  return (
    <Router history={browserHistory}>
      {AppRoutes}
    </Router>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));
