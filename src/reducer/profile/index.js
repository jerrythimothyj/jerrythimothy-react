import {combineReducers} from 'redux';
import aboutMe from './aboutMe';
import employment from './employment';
import academic from './academic';
import projects from './projects';

export default combineReducers({
  aboutMe,
  employment,
  academic,
  projects
});
