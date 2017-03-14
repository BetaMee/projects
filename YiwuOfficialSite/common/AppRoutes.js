import React from 'react';
import {Route, IndexRedirect,IndexRoute} from 'react-router';

import Layout from './component/Layout.jsx';
import NotFoundPage from './component/page/NotFoundPage.jsx';
import IndexContainer from './container/IndexContainer.jsx';
import Indexpage from './component/page/Indexpage.jsx';


const AppRoutes = (
  <Route path="/" component={Layout}>
      <IndexRoute component={Indexpage} />
      <Route path="*" component={NotFoundPage}/>            
  </Route>
);


export default AppRoutes;