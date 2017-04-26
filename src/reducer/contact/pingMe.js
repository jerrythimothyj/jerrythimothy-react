import {SET_PING_ME_MESSAGE} from './actions';

const initialState = '';

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_PING_ME_MESSAGE:
      return action.pingMe;
    default:
      return state;
  }
}
