import {SET_EMPLOYMENT} from './actions';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_EMPLOYMENT:
      return action.employment;
    default:
      return state;
  }
}
