import {SET_ACADEMIC} from './actions';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_ACADEMIC:
      return action.academic;
    default:
      return state;
  }
}
