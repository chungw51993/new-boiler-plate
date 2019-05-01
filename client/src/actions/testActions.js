import {
  TEST_ACTION
} from './../constants/actionTypes.js';

export const testAction = () => dispatch => dispatch({
  type: TEST_ACTION,
});
