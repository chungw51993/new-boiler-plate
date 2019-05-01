import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import testReducer from './test/testReducer';

export default combineReducers({
  test: testReducer,
  routing: routerReducer,
});
