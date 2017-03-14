import React from 'react';
import {Route, IndexRedirect,IndexRoute} from 'react-router';

import Layout from './component/Layout.jsx';
// import IndexContainer from './container/IndexContainer.jsx';//首页
import Indexpage from './component/page/Indexpage.jsx';//首页
import Detailpage from './component/page/Detailpage.jsx';//详情页
import Download from './component/page/Download.jsx';//下载页
import Aboutus from './component/page/Aboutus.jsx';
import NotFoundPage from './component/page/NotFoundPage.jsx';//错误页


const AppRoutes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Indexpage} />
    <Route path="/detail" component={Detailpage}/>     
    <Route path="/download" component={Download}/>     
    <Route path="/about" component={Aboutus}/>     
    <Route path="*" component={NotFoundPage}/>            
  </Route>
);


export default AppRoutes;