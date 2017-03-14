import { combineReducers }from 'redux';
import { routerReducer } from 'react-router-redux' // 将routerReducer一起合并管理
import FooReducer from './FooReducer';


export default combineReducers({
    foo:FooReducer,
    routing: routerReducer
});
