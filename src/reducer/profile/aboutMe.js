import {SET_ABOUT_ME} from './actions';

const initialState = "";

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_ABOUT_ME:
      return action.aboutMe;
    default:
      return state;
  }
}
