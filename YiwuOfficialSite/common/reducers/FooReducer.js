import { SYNC_FOO, ERROR_FOO } from '../action/FooAction';

const initialState = {
  isFetching: false,
  status: false,
  errorMsg: '',
  data: [],
};

const FooReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_FOO:
      return Object.assign({}, state, {
        errorMsg: action.errMsg,
      });

    case SYNC_FOO:
      return Object.assign({}, state, {
        status: !state.status,
      });
    default:
      return state;
  }
} 


export default FooReducer;