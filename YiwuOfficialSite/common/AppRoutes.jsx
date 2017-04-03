import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './component/Layout';
import Indexpage from './component/page/Indexpage'; // 首页
import NotFoundPage from './component/page/NotFoundPage'; // 错误页


const AppRoutes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Indexpage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default AppRoutes;
