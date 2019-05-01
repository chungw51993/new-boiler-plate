import {
  TEST_ACTION,
} from './../../../constants/actionTypes';

const initialState = {
  on: 'Try Me',
};

const testReducer = (state = initialState, action) => {
  switch(action.type) {
    case TEST_ACTION:
      let on = 'Working';
      if (state.on === 'Working') {
        on = 'Try Me';
      }
      return {
        ...state,
        on,
      };

    default:
      return state;
  }
};

export default testReducer;
